
import { useDispatch, useSelector } from "react-redux";
import {asyncupdateuser} from "../store/actions/userActions"


const Cart = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  // Increment 
  const incrementHandler = (quantity) => {
    const copyQuantity = {...quantity}
    copyQuantity.quantity++

    const copyuser = {...users, cart : [...users.cart]}
    const prodIndex = copyuser.cart.findIndex((c) => c.productId == quantity.productId)
    
    copyuser.cart[prodIndex] = copyQuantity

     dispatch(asyncupdateuser(copyuser))
  }

  // Decrement
  const decrementHandler = (quantity) => {
     const copyQuantity = {...quantity}
    copyQuantity.quantity--
    if(copyQuantity.quantity > 0){
       const copyuser = {...users, cart : [...users.cart]}
    const prodIndex = copyuser.cart.findIndex((c) => c.productId == quantity.productId)
    copyuser.cart[prodIndex] = copyQuantity
     dispatch(asyncupdateuser(copyuser))
    }
  }

  const removeItemHandler = (quantity) => {
       const copyuser = {...users, cart : [...users.cart]}
    const x = copyuser.cart.findIndex((c) => c.productId == quantity.productId)
    copyuser.cart.splice(x, 1)
     dispatch(asyncupdateuser(copyuser))
  }

  const cart = users.cart.map((item) => {

  const product = products.find((prod) => prod.id === item.productId);
  return (
   <div key={item?.productId} className=" w-[50%] flex  rounded-lg p-4 mb-4 shadow-sm gap-4 items-center bg-gray-800">
      <img src={product?.image} alt={product?.title} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{product?.title}</h2>
        <p className="text-sm text-gray-500 capitalize">Category: {product?.category}</p>
        <p className="mt-1 text-green-700 font-medium">₹{product?.price}</p>

        {/* ----------------------------------------------- */}
   <div className="text-sm mt-2 mb-2">
  <div className="flex  gap-5  items-center">
    <div className="flex items-center gap-3 border px-3 py-1 rounded w-fit">
    <button
      className="text-xl font-bold hover:text-red-600 px-2"
      onClick={() => decrementHandler(item)}
    >
      -
    </button>

    <span className="text-lg font-medium">{item.quantity}</span>

    <button
      className="text-xl font-bold hover:text-green-600 px-2"
      onClick={() => incrementHandler(item)}
    >
      +
    </button>
  </div>
  <div onClick={() => removeItemHandler(item)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200 shadow-sm font-bold cursor-pointer">Remove</div>
  </div>
</div>
{/* //--------------------------------------------- */}
        <p className="font-bold">Total: ₹{item.quantity * parseFloat(product?.price)}</p>
      </div>
    </div>
  );
});

const pricesArray = users.cart.map((item)=>{
  const product = products.find((prod) => prod.id === item.productId);

  return item?.quantity * product?.price
})

const totalPrice = pricesArray.reduce((prev , curr)=>{
  return prev + curr
},0)

  return (
    <div className="flex flex-col justify-center items-center">
      {cart}
      
    <div className="flex gap-5 justify-center items-center p-2 rounded bg-gray-800 max-w-md mx-auto mt-10">
  <h1 className="text-xl font-semibold">
    Total: ₹{totalPrice.toFixed(2)}
  </h1>
  <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold px-6 py-2 rounded transition duration-200 shadow-sm">
    Place Order
  </button>
</div>

    </div>
  )
}

export default Cart