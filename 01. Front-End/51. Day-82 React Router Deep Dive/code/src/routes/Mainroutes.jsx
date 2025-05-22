
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Product from '../Components/Product'
import About from '../Components/About'
import Service from '../Components/Service'
import ProductDetails from '../Components/productDetails'
import ServiceDetails from '../Components/ServiceDetails'
import ServiceUpdate from '../Components/ServiceUpdate'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/product" element={<Product />}  />
        <Route path="/product/detail/:name" element={<ProductDetails />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/service" element={<Service />}>
           <Route path="/service/detail" element={<ServiceDetails/>}  />
           <Route path="/service/update" element={<ServiceUpdate/>}  />
        </Route>
        
      </Routes>
  )
}

export default Mainroutes