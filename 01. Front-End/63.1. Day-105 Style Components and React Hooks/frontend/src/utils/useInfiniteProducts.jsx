import React, { useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import { useDispatch, useSelector } from "react-redux";
import { loadlazyproduct } from "../store/reducers/productSlice";

const UseInfiniteProducts = () => {

      const dispatch = useDispatch();

  // const [products, setProducts] = useState([])
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=6&_start=${products.length}`
      );

      if (data.length == 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
        // setProducts([...products, ...data])
        dispatch(loadlazyproduct(data));
      }
    } catch (error) {
      setHasMore(false);
      console.log(error);
    }
  };

    // Whenever the page is refreshed, fetchProducts is called and data is loaded into the products state
    useEffect(()=>{
      fetchProducts()   
    },[])

  return {products, hasMore, fetchProducts};
};

export default UseInfiniteProducts;
