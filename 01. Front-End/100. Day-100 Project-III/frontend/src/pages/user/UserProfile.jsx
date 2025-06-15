
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynclogoutuser } from '../../store/actions/userActions'
import { useNavigate } from 'react-router-dom'


const UserProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.userReducer.users)

    const LogoutHandler =  () => {
      dispatch(asynclogoutuser())
      navigate("/login")
    }


  return user ?  (
     <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md p-6 text-gray-800">

      <h1 className="text-2xl font-semibold mb-4 text-center border-b pb-2">User Profile</h1>
      
      <div className="mb-4">
        <p className="font-medium">Username:</p>
        <p className="text-gray-600">{user.username}</p>
      </div>

      <div className="mb-4">
        <p className="font-medium">Email:</p>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <div>
        <p className="font-medium">Role:</p>
        <p className={`text-sm px-2 py-1 rounded-full inline-block 
          ${user.isAdmin ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
          {user.isAdmin ? "Admin" : "User"}
        </p>
      </div>

      <button onClick={LogoutHandler}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mr-5"
      >
        Log out
      </button>

      <button  onClick={() => navigate("/user-profile/update-user-profile")} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
  Edit Profile
</button>
    </div>
  ) : "Loading...."
}

export default UserProfile