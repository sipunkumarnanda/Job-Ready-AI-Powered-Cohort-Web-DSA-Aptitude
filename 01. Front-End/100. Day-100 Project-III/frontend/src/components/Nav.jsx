import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const Nav = () => {
  const user = useSelector((state) => state.userReducer)

  return (
    <nav className="flex flex-wrap justify-center items-center gap-4 p-6  mb-10">
      <NavLink 
        to="/" 
        className=" text-lg font-medium hover:text-blue-600 transition"
      >
        Home
      </NavLink>

      {/* Admin Route */}
      {user.users?.isAdmin === true && (
        <NavLink 
          to="/admin/create-product" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Create Product
        </NavLink>
      )}

      {/* Authenticated User Links */}
      {user.users ? (
        <>
          <NavLink 
            to="/cart" 
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Cart
          </NavLink>

          <NavLink 
            to="/user-profile" 
            className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            <UserCircleIcon className="h-5 w-5" />
            Profile
          </NavLink>
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
