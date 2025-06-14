
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import {asyncupdateuser} from "../store/actions/userActions"
import {toast} from "react-toastify"

const Products = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const products = useSelector((state) => state.productReducer.products)
  // console.log("Product reducer : ", products);

  // const {
  //   userReducer : {users},
  //   productReducer : {products}
  // } = useSelector((state) => state)

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const AddtoCartHandler = (id) => {
    if(users){
        const copyuser = {...users, cart : [...users.cart]}
    const x = copyuser.cart.findIndex((c) => c.productId == id)
    console.log(x);
    
    if(x == -1){
      copyuser.cart.push({productId : id , quantity : 1})
    }else{
      copyuser.cart[x] = {
        productId : id , 
        quantity : copyuser.cart[x].quantity + 1 
      }
    }

    dispatch(asyncupdateuser(copyuser))
    }else{
      toast.error("please Log in")
      navigate("/login")
    }
  }



  const renderproduct = products.map((prod)=>{
    return (
      
     <div
  key={prod.id}
  className="flex flex-col justify-between text-white w-[200px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-2"
>
  <img
    src={prod.image}
    alt={prod.title}
    className="w-full h-[150px] object-cover mb-1 rounded-md"
  />
  <div className='leading-tight'>
    <h2 className="text-sm font-medium line-clamp-2">
    {prod.title}
  </h2>
  <span className="text-[15px] text-indigo-700 ">
      {prod.category}
    </span>
  <p>{prod.description.slice(0,20)}...</p>
  </div>
  <div className="flex items-center justify-between mt-1">
    <span className="text-base font-semibold text-green-600">${prod.price}</span>

    <button onClick={() => AddtoCartHandler(prod.id)} className='text-[12px] bg-white text-indigo-700 px-2 py-0.5 rounded-full'>Add to cart</button>
  </div>
  <Link to={`/product/${prod.id}`} className='text-blue-500'>More Info...</Link>
</div>

    )
  })

  return (
    products.length > 0 
    ? 
    <div className='flex gap-5'>
    {renderproduct}
    </div> 
    : 
    <div>
      <h1>Loading products....</h1>
    </div>
  )
}

export default Products