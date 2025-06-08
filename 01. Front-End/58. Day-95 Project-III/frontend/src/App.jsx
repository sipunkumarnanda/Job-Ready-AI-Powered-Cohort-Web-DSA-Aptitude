
import { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { asynccurrentuser } from './store/actions/userActions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asynccurrentuser())
  }, [])

  return (
    <div className='text-white font-thin w-screen h-screen bg-gray-800'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App