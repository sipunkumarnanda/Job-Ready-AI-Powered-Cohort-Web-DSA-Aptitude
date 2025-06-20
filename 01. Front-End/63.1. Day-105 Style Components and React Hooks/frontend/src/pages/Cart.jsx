
import { useDispatch, useSelector } from "react-redux";
import {asyncupdateuser} from "../store/actions/userActions"


const Cart = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.userReducer.users);


  // Increment quantity
  const incrementHandler = (index) => {
    const copyuser = {...users, cart : [...users.cart]}
    copyuser.cart[index] = {
      ...copyuser.cart[index] , 
      quantity: copyuser.cart[index].quantity + 1
    }
     dispatch(asyncupdateuser(copyuser.id , copyuser))
  }

  // Decrement quantity
  const decrementHandler = (index) => {
   const copyuser = {...users, cart : [...users.cart]}
    copyuser.cart[index] = {
      ...copyuser.cart[index] , 
      quantity: copyuser.cart[index].quantity - 1
    }
     if(copyuser.cart[index].quantity > 0){
      dispatch(asyncupdateuser(copyuser.id , copyuser))
     }
  }

  // Remove from cart
  const removeItemHandler = (index) => {
       const copyuser = {...users, cart : [...users.cart]}
    // const x = copyuser.cart.findIndex((c) => c.prod.id == item.cart[index].id)
    copyuser.cart.splice(index, 1)
     dispatch(asyncupdateuser(copyuser.id , copyuser))
  }

  // ---------------------------------------------------------

  // Func Start
  const cartItem = users.cart.map((item, index) => {
  return (
   <div key={item?.prod?.id} className=" w-[50%] flex  rounded-lg p-4 mb-4 shadow-sm gap-4 items-center bg-gray-800">
      <img src={item?.prod?.image} alt={item?.prod?.title} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item?.prod?.title}</h2>
        <p className="text-sm text-gray-500 capitalize">Category: {item?.prod?.category}</p>
        <p className="mt-1 text-green-700 font-medium">₹ {item?.prod?.price}</p>

        {/* ----------------------------------------------- */}
   <div className="text-sm mt-2 mb-2">
  <div className="flex  gap-5  items-center">
    <div className="flex items-center gap-3 border px-3 py-1 rounded w-fit">
    <button
      className="text-xl font-bold hover:text-red-600 px-2"
      onClick={() => decrementHandler(index)}
    >
      -
    </button>

    <span className="text-lg font-medium">{item?.quantity}</span>

    <button
      className="text-xl font-bold hover:text-green-600 px-2"
      onClick={() => incrementHandler(index)}
    >
      +
    </button>
  </div>
  <div onClick={() => removeItemHandler(index)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200 shadow-sm font-bold cursor-pointer">Remove</div>
  </div>
</div>
{/* //--------------------------------------------- */}
        <p className="font-bold">Total: ₹ {item?.quantity * parseFloat(item?.prod?.price)}</p>
      </div>
    </div>
  );
});
// Func end 

const pricesArray = users.cart.map((item)=>{
  return item?.quantity * item?.prod?.price
})

const totalPrice = pricesArray.reduce((prev , curr)=>{
  return prev + curr
},0)


  return (
    <div className="flex flex-col justify-center items-center">
      {cartItem}
    <div className="flex gap-5 justify-center items-center p-2 rounded bg-gray-800 max-w-md mx-auto mt-10">
  <h1 className="text-xl font-semibold">
    Total: ₹ {totalPrice.toFixed(2)}
  </h1>
  <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold px-6 py-2 rounded transition duration-200 shadow-sm">
    Place Order
  </button>
</div>

    </div>
  )
}

export default Cart