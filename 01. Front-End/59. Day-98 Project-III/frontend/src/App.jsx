
import { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { asynccurrentuser } from './store/actions/userActions'
import { asyncloadproduct } from './store/actions/productActions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asynccurrentuser())
    dispatch(asyncloadproduct())
  }, [])

 

  return (
    <div className="text-white font-thin min-h-screen w-full bg-gray-800 pb-10">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App