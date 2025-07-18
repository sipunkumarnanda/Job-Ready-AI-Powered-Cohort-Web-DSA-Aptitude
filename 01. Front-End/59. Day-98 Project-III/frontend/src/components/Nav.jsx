

import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { asynclogoutuser } from '../store/actions/userActions'

const Nav = () => {
  const user = useSelector((state) => state.userReducer)
  // console.log( " from Nav Users : ",user);

  const dispatch = useDispatch()

  // const product = useSelector((state) => state.productReducer)
  // console.log( " from Nav product : ",product);

  return (
    <nav className='flex justify-center items-center gap-x-5 p-10 mb-5'>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/products">Products</NavLink>

  {user.users ? (
    <>
      <NavLink 
        to="/admin/create-product" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Create Product
      </NavLink>

      <button onClick={()=> dispatch(asynclogoutuser())}
        to="/logout" 
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Log out
      </button>
    </>
  ) : (
    <NavLink 
      to="/login" 
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
    >
      Log in
    </NavLink>
  )}
</nav>

  )
}

export default Nav