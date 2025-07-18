
import { Routes, Route } from 'react-router-dom'
// import Products from "../pages/Products"
// import Login from "../pages/Login"
// import Register from "../pages/Register"
// import CreateProduct from "../pages/admin/CreateProduct"
// import ProductDetails from '../pages/admin/ProductDetails'
// import PageNotFound from '../PageNotFound'
// import UserProfile from '../pages/user/UserProfile'
// import UpdateUserProfile from '../pages/user/UpdateUserProfile'
// import Cart from "../pages/Cart"
// import AuthWrapper from './AuthWrapper';

// Lazy loading implement 
import { lazy } from 'react'

const Products = lazy(() => import("../pages/Products"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"))
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"))
const PageNotFound = lazy(() => import("../PageNotFound"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"))
const UpdateUserProfile = lazy(() => import("../pages/user/UpdateUserProfile"))
const Cart = lazy(() => import("../pages/Cart"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))

const Mainroutes = () => {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetails />} />

      {/* Guest-only Routes (not logged in) */}
      <Route
        path='/login'
        element={
          <AuthWrapper role="guest">
            <Login />
          </AuthWrapper>
        }
      />
      <Route
        path='/register'
        element={
          <AuthWrapper role="guest">
            <Register />
          </AuthWrapper>
        }
      />

      {/* Authenticated user routes */}
      <Route
        path='/user-profile'
        element={
          <AuthWrapper role="auth">
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path='/cart'
        element={
          <AuthWrapper role="auth">
            <Cart/>
          </AuthWrapper>
        }
      />

      <Route
        path='/user-profile/update-user-profile'
        element={
          <AuthWrapper role="auth">
            <UpdateUserProfile />
          </AuthWrapper>
        }
      />

      {/* Admin-only routes */}
      <Route
        path='/admin/create-product'
        element={
          <AuthWrapper role="admin">
            <CreateProduct />
          </AuthWrapper>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Mainroutes