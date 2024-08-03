import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Fabrics from './pages/Fabrics'
import Contacts from './pages/Contacts'
import HowOrder from './pages/HowOrder'
import Catalog from './pages/Catalog'
import Footer from './components/Footer';
import ItemCard from './pages/ItemCard';
import Registration from './pages/Registration';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us/brand" element={<Brand/>}></Route>
          <Route path="/cloth/item" element={<ItemCard/>}></Route>
          <Route path="/about-us/fabrics" element={<Fabrics/>}></Route>
          <Route path="/about-us/contacts" element={<Contacts/>}></Route>
          <Route path="/how-to-order" element={<HowOrder/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/authorisation" element={<Auth/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/makeOrder" element={<Order/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
