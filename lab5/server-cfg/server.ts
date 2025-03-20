const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

//user

server.post('/register', (req, res) =>{
  const user = req.body.user
  const lastUser = JSON.parse(JSON.stringify(router.db.get('users'))).at(-1)

  user.id  = lastUser?.id+1 || 1

  router.db.get('users').push(user).write()

  res.json({
    id: user.id
  })
})

server.post('/find-user-by-phone', (req, res) => {
  const userPhone = req.body.phone

  const users = JSON.parse(JSON.stringify(router.db.get('users')));

  const existedUser = users.find(user => user.phone === userPhone)
  res.json(existedUser || null)

})

server.post('/login-user', (req, res) => {
  const userLoginData = req.body.user

  const users = JSON.parse(JSON.stringify(router.db.get('users')));

  const correctUser = users.find(user => user.phone === userLoginData.phone)

  res.json({
    correctUser
  })
})

server.post('/check-user-data', (req, res) => {
  const userPhone = req.body.phone
  const userPassword = req.body.password

  const users = JSON.parse(JSON.stringify(router.db.get('users')));

  const correctUser = users.find(user => user.phone === userPhone)

  if (correctUser && correctUser.password === userPassword){
    res.json(
      correctUser
    )
  } else {
    res.json(
      null
    )
  }

})

server.post('/user-by-id', (req, res) => {
  const userId = req.body.userId
  const users = JSON.parse(JSON.stringify(router.db.get('users')))
  const user = users.find(user => user.id === userId)

  res.json(
    user
  )
})

//items

server.post('/get-item-by-name', (req, res) => {
  const pizzaName = req.body.pizzaName
  const pizzas = JSON.parse(JSON.stringify(router.db.get('pizzas')))
  const pizza = pizzas.find(pizza => pizza.name === pizzaName)

  if (pizza){
    res.json(
      pizza
    )
  } else {
    res.json(
      null
    )
  }
})

server.post('/post-item-to-cart', (req, res) => {
  try {
    const cartItem = req.body.pizza
    const user = req.body.user
    console.log(user)
    if (!user) {
      const message = {
        head: "Неудачно!",
        text: "Сначала зарегистрируйтесь"
      }
      return res.json(
        message
      )
    }

    const carts = JSON.parse(JSON.stringify(router.db.get('carts')))
    let userCart = carts.find(cart => cart.userId === user)
    if (!userCart){
      userCart = {
        userId: user,
        totalPrice: cartItem.price,
        items: [cartItem]
      }
      carts.push(userCart)
    } else{
      userCart.items.push(cartItem)
      userCart.totalPrice += cartItem.price
    }
    router.db.set('carts', carts).write()

    const message = {
      head: "Удачно",
      text: "Товар успешно добавлен в корзину"
    }

    res.json(
      message
    )
  } catch (error){
    const message = {
      head: "Неудачно",
      text: "Доставка временно не работает, извините"
    }
    res.json(
      message
    )
  }


})

//cart

server.post('/get-user-cart', (req, res) => {

  const userId = req.body.userId
  const carts = JSON.parse(JSON.stringify(router.db.get('carts')))
  let userCart = carts.find(cart => cart.userId === userId)

  if(!userCart){
    userCart = {
      userId: userId,
      totalPrice: 0,
      items: []
    }
    carts.push(userCart)
    router.db.set('carts', carts).write()
  }

  res.json(
    userCart
  )
})

server.delete('/delete-item-from-cart/:userId/:itemId/:diameter', (req, res) => {
  const user = Number(req.params.userId)
  const item = Number(req.params.itemId)
  const itemDiameter = Number(req.params.diameter)

  const carts = router.db.get('carts').value();
  const userCart = carts.find(cart => cart.userId === user);

  userCart.items = userCart.items.filter(
    cartItem => !(cartItem.id === item && cartItem.diameter === itemDiameter)
  );

  userCart.totalPrice = userCart.items.reduce((total, item) => total + item.price, 0)

  router.db.get('carts').find({ userId: user }).assign(userCart).write();

  res.json(
    userCart
  )
})

//order

server.post('/make-order', (req, res) => {

  try {
    const orderInfo = req.body.orderInfo
    const userId = req.body.userId

    if (!userId){
      const message = {
        head: "Неудачно!",
        text: "Вы не авторизованы"
      }
      res.json(
        message
      )
    }

    const carts = JSON.parse(JSON.stringify(router.db.get('carts')))
    const userCart = carts.find(cart => cart.userId === userId)

    const order = {
      userId: userId,
      info: orderInfo,
      totalPrice: userCart.totalPrice,
      items: userCart.items
    }

    const users = router.db.get('users');
    const user = users.find({ id: userId }).value();

    user.address = orderInfo.address
    users.write()

    router.db.get('carts').remove(cart => cart.userId === userId).write()
    router.db.get('orders').push(order).write()

    const message = {
      head: "Удачно",
      text: "Заказ оформлен, скоро привезем"
    }
    res.json(
      message
    )
  } catch (error){
    const message = {
      head: "Неудачно",
      text: "Доставка временно не работает, извините"
    }
    res.json(
      message
    )
  }

})

server.post('/get-user-orders', (req, res) => {
  const userId = req.body.userId

  const orders = JSON.parse(JSON.stringify(router.db.get('orders')))
  const userOrders = orders.filter(order => order.userId === userId);

  res.json(
    userOrders
  )
})

server.use(router)
server.listen(3003, () => {
  console.log('working')
})
