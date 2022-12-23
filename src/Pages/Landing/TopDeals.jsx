import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../API/axios'

const TopDeals = ({popularProduct, user}) => {
  const navigate = useNavigate()
  
  const addCartHandler = (id) => {
    
    if(user?.name){
      addToCart({product_id: id, quantity: 1}).then(response => {
        console.log(response.data)
        return navigate('/cart')

      }).catch(error => {
        console.log(error)

      })
    } else {
      return navigate("/login")
    }
  }

  return (
    <div className='mx-auto w-[78%] flex flex-col gap-7'>
      {/* Title */}
      <div className='w-full h-12 border-b-[1px] border-abu flex justify-between'>
        <div className='h-full text-2xl font-medium border-b-[3px] border-yellow-400'>
          <h2>Top Deals of The Day</h2>
        </div>
      </div>

      {/* Section1 */}
      <div className='flex justify-between items-center'>
        {popularProduct.slice(0, 2).map((product, index)=>(
          <div key={index} className='w-[696px] h-[336px] bg-white rounded-[20px] flex justify-between p-[20px] border border-abu shadow-md'>
            <div className='h-full w-[296px]'>
              <img src={"http://127.0.0.1:8000/storage/" + product.photos[0].url} className="w-full h-full" alt="" />
            </div>

            <div className='h-full w-[400px] p-[20px] flex flex-col justify-center gap-5'>
              <p className='text-blue-700 font-semibold'>{product.name}</p>
              <p className='text-lg font-semibold'>${product.price}</p>
              <p>Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of...</p>
              <button onClick={()=> addCartHandler(product.id)} className='w-full h-[40px] rounded-[30px] bg-yellow-400 text-white font-semibold'>
                {user?.name ? "Add to Cart" : "Login for Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Section2 */}
      <div className='flex justify-between items-center text-white'>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/laptop2.webp"})`}} className='w-[445px] h-[179px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center gap-5'>
          <p className='w-[211px] text-xl'>Microsoft Surface Laptop 14”</p>
          <p>Up To - 30%</p>
        </div>

        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/laptop2.webp"})`}} className='w-[445px] h-[179px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center gap-5'>
          <p className='w-[211px] text-xl'>Microsoft Surface Laptop 14”</p>
          <p>Up To - 30%</p>
        </div>

        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/laptop2.webp"})`}} className='w-[445px] h-[179px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center gap-5'>
          <p className='w-[211px] text-xl'>Microsoft Surface Laptop 14”</p>
          <p>Up To - 30%</p>
        </div>
      </div>
    </div>
  )
}

export default TopDeals