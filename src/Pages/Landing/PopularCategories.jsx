import React from 'react'

const PopularCategories = () => {
  return (
    <div className='mx-auto w-[78%] flex flex-col gap-7'>
      <div className='w-full h-12 border-b-[1px] border-abu flex justify-between'>
        <div className='h-full text-2xl font-medium border-b-[3px] border-yellow-400'>
          <h2>Popular Categories</h2>
        </div>
      </div>

      <div className='flex justify-between items-center text-white'>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/categories/laptop.webp"})`}} className='w-[336px] h-[137px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center shadow-md'>
          <p className='font-medium'>Laptop</p>
          <p>(17 item)</p>
        </div>

        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/categories/laptop.webp"})`}} className='w-[336px] h-[137px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center'>
          <p className='font-medium'>Laptop</p>
          <p>(17 item)</p>
        </div>

        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/categories/laptop.webp"})`}} className='w-[336px] h-[137px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center'>
          <p className='font-medium'>Laptop</p>
          <p>(17 item)</p>
        </div>

        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/categories/laptop.webp"})`}} className='w-[336px] h-[137px] bg-cover bg-center rounded-[20px] p-[30px] flex flex-col justify-center'>
          <p className='font-medium'>Laptop</p>
          <p>(17 item)</p>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories