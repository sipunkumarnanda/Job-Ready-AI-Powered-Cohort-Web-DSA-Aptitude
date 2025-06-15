
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {asyncupdateuser, asyncdeleteuser} from "../../store/actions/userActions"
import { useNavigate } from 'react-router-dom'

const UpdateUserProfile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.userReducer.users);
     console.log(user);

    const { register, handleSubmit, formState: { errors }, reset} = useForm()

     useEffect(() => {
      if (user) {
        reset({
          username: user?.username,
          email: user?.email,
          password: user?.password,
        });
      }
    }, [user, reset]);

    const updateUserHandler = (info) => {
        info.id = user.id
       dispatch(asyncupdateuser(info))
    }

    const DeleteHandler = () => {
      console.log("Delete");
      dispatch(asyncdeleteuser(user))
      navigate("/login")
    }


  return (
   <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md p-6 text-gray-800">
    <h1 className="text-2xl font-semibold mb-4 text-center">Update Profile</h1>

      <form onSubmit={handleSubmit(updateUserHandler)} className="flex flex-col ">
  
  <label className="text-sm mb-1">User Name:</label>
  <input
    {...register("username", { required: true })}
    className="border p-3 mb-3 rounded-none outline-none"
    type="text"
    placeholder="User Name"
  />
  {errors.username && <small className="text-red-400 mb-2">Username is required</small>}

  <label className="text-sm mb-1">Email:</label>
  <input
    {...register("email", { required: true })}
    className="border p-3 mb-3 rounded-none outline-none"
    type="email"
    placeholder="Email"
  />
  {errors.email && <small className="text-red-400 mb-2">Email is required</small>}

  <label className="text-sm mb-1">Password:</label>
  <input
    {...register("password", { required: true })}
    className="border p-3 mb-3 rounded-none outline-none"
    type="password"
    placeholder="Password"
  />
  {errors.password && <small className="text-red-400 mb-2">Password is required</small>}

  <div className="flex justify-center gap-x-5 mt-4">
  <button className="p-3 bg-green-800 text-white w-40 hover:bg-green-700 transition">
    Update User
  </button>

  <button onClick={()=> DeleteHandler()} type="button" className="p-3 bg-red-600 text-white w-40 hover:bg-red-700 transition">
    Delete User
  </button>
</div>

</form>

    </div>
  )
}

export default UpdateUserProfile