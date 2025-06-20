
import { lazy ,Suspense } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import UseInfiniteProducts from '../utils/useInfiniteProducts'

const ProductTemplate = lazy(() => import('../components/ProductTemplate'))

const Products = () => {

  const {products, hasMore, fetchProducts} = UseInfiniteProducts()

  return (
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={
          <div className="w-full flex flex-col gap-5 justify-center items-center py-4">
            <h1 className="text-xl font-bold">Loading more products...</h1>
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        endMessage={
          <p className="text-center py-4">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Suspense
          fallback={
            <div className="w-full flex flex-col gap-5 justify-center items-center py-10">
              <h1 className="text-xl font-semibold">Loading product templates...</h1>
              <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
          <div className="flex gap-5 flex-wrap justify-evenly">
            
            {products.map((prod) => (
              <ProductTemplate key={prod.id} prod={prod} />
            ))}
          </div>

        </Suspense>
      </InfiniteScroll>
  );
};

export default Products