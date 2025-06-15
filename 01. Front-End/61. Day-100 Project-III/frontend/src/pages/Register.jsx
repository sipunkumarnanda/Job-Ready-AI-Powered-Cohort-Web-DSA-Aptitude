
import { useForm } from "react-hook-form"
import nanoid from "nano-id"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {asyncregisteruser} from "../store/actions/userActions"

const Register = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const RegisterHandler = (user) =>{
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = []
    dispatch(asyncregisteruser(user))
    navigate("/login")
  }

  return (
    <>
    <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2 ml-5'>
        <input {...register("username", {required : true})} className='outline-0 border-b p-2 mb-2' type="text" placeholder='User Name' />
        {errors.username && <small className="text-red-400">username is required</small>}

        <input {...register("email", {required : true})} className='outline-0 border-b p-2 mb-2' type="email" placeholder='Email' />
        {errors.email && <small className="text-red-400">email is required</small>}
        

        <input {...register("password", {required : true})} className='outline-0 border-b p-2 mb-5' type="password" placeholder='Password' />
        {errors.password && <small className="text-red-400">password is required</small>}

        <button className="p-2 bg-green-800 rounded cursor-pointer text-white w-[30%] m-auto mb-5">Register User</button>

        <p>Already Have An Account ?  <Link className="text-blue-500" to="/login">Login</Link> </p>
    </form>
    </>
  )
}

export default Register