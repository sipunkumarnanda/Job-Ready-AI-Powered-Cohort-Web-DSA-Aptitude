
import { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { asynccurrentuser } from './store/actions/userActions'
// import { asyncloadproduct } from './store/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
 import { ToastContainer } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch()

  const {users} = useSelector((state)=> state.userReducer)
  // const {products} = useSelector((state)=> state.productReducer)

  useEffect(()=>{
    !users && dispatch(asynccurrentuser())
  }, [users])

 

  return (
    <div className="text-white font-thin min-h-screen w-full bg-gray-900 pb-10">
      <Nav/>
      <Mainroutes/>
      <ToastContainer />
    </div>
  )
}

export default App