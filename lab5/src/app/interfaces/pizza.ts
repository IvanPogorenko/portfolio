export interface IPizza {
  id: number,
  name: string,
  price: number[] | number,
  ingredients: IIngredient[]
  description: string,
  diameter: number[] | number,
  count?: number,
  img: string
}

export interface IIngredient{
  "name": string,
  "price": number,
  "grams": number,
  "counts": number,
  "img": string
}

export function toPizza(data: any): IPizza{
  return {
    id: data.id,
    name: data.name,
    price: data.price,
    ingredients: data.ingredients.map((ingredient: any) => toIngredient(ingredient)),
    description: data.description,
    diameter: data.diameter,
    count: data?.count,
    img: data.img
  }
}

export function toIngredient(data: any): IIngredient{
  return {
    name: data.name,
    price: data.price,
    grams: data.grams,
    counts: data.counts,
    img: data.img
  }
}
