import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const TrendingProduct = ({popularProduct}) => {

  return (
    <div className='mx-auto w-[78%] h-[384px] flex flex-col gap-7'>
      <div className='w-full h-12 border-b-[1px] border-abu flex justify-between'>
        <div className='h-full text-2xl font-medium border-b-[3px] border-yellow-400'>
          <h2>Hot Trending Proudcts</h2>
        </div>

        <NavLink to="/shop" className=' text-gray-400 font-bold flex items-center gap-2 hover:text-yellow-400'>
          <p>View All Products</p>
          <FaChevronRight></FaChevronRight>
        </NavLink>
      </div>

      <div className='flex justify-between items-center'>
        {popularProduct.map((product, index)=>(
          <NavLink key={index} to={`shop/${product.slug}`} state={{productId:product.id}} className='w-[205px] h-[313px] flex flex-col justify-between border border-abu shadow-sm bg-white rounded-[20px] p-[20px]'>
            <div className='w-full h-[165px]'>
              <img src={"http://127.0.0.1:8000/storage/" + product.photos[0].url} className="w-full h-full" alt="" />
            </div>

            <div className='w-full h-[100px] font-semibold flex flex-col justify-between'>
              <p className='text-blue-700'>{product.name}</p>
              <p className='text-lg'>${product.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default TrendingProduct