
import Image from 'next/image'
import spekaer from '../public/france.avif'

const page = () => {
  return (
    <div>
      <h6>Home</h6>
      {/* <img src='france.avif' alt='Eiffel Tower' className='w-[30%] h-[50%]'/> */}

      <Image src={spekaer} width={200} height={200} alt='Not Found Image'/>
    </div>
  )
}

export default page