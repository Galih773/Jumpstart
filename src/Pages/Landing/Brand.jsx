import React from 'react'

const Brand = () => {
  return (
    <div className='h-[83px] bg-yellow-400'>
      <div className='mx-auto w-[78%] h-full flex justify-between items-center'>
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
        <img src={process.env.PUBLIC_URL+"/img/brand/xiaomi.webp"} className="max-h-[80%] rounded-lg" alt="" />
      </div>
    </div>
  )
}

export default Brand