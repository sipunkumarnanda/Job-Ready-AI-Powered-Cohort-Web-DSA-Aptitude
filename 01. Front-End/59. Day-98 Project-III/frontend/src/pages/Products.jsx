
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const Products = () => {

  const products = useSelector((state) => state.productReducer.products)
  // console.log("Product reducer : ", products);


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
    <button className='text-[12px] bg-white text-indigo-700 px-2 py-0.5 rounded-full'>Add to cart</button>
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