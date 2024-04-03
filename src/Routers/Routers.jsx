import { Home } from '../pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import ProfileEdit from '../components/ProfileEdit/ProfileEdit'
import Profile from '../components/ProfileInformation/Profile'
import Address from '../components/Address/Address'
import OrderSummary from '../components/OrderSummary/OrderSummary'
import ShoppingCart from '../pages/Shopingcart';
import OrderDetails from '../components/OrderDetails/OrderDetail'

import Products from '../components/Products/Products';
import Register from '../components/Register/Register';
const Routers = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile-edit' element={<ProfileEdit/>} />
          <Route path='/address-edit' element={<Address/>} />
          <Route path='/Orders' element={<OrderDetails/>} />
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/items' element={<Products/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default Routers