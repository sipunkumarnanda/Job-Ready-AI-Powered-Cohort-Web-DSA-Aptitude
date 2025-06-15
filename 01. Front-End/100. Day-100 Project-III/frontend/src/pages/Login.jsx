
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { asyncloginuser } from "../store/actions/userActions"
import { useDispatch } from "react-redux"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const LoginHandler = (user) =>{
    dispatch(asyncloginuser(user))
    navigate("/")
  }


  return (
    <>
    <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2 ml-5'>

        <input {...register("email", { required: true })} className='outline-0 border-b p-2 mb-2' type="email" placeholder='Email' />
        {errors.email && <small className="text-red-400">Email is required</small>}

        <input {...register("password",  { required: true })} className='outline-0 border-b p-2 mb-5' type="password" placeholder='Password' />
        {errors.password && <small className="text-red-400">Password is required</small>}

        <button className="p-2 bg-green-800 rounded cursor-pointer text-white w-[30%] m-auto mb-5">Login User</button>

        <p>Don't Have An Account ?  <Link className="text-blue-500" to="/register">Register</Link> </p>
    </form>
    </>
  )
}

export default Login