import { useEffect } from "react";
import axios from "../utils/axios";


const Home = () => {
  const getproduct = async () => {
    try {
      const {data} = await axios.get("/products")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getproduct()
  }, [])

  
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct} className="p-2 bg-blue-900 rounded m-5">Get Product</button>
    </div>
  )
}

export default Home