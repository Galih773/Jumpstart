import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
    const navigate = useNavigate()
    const startShopping = () => {
        navigate("/shop")
    }
  return (
    <div className='w-fit mx-auto flex flex-col items-center gap-5'>
        <img src={process.env.PUBLIC_URL+"/img/emptycart.webp"} alt="emptycart" className='w-[400px] object-cover rounded-full'/>
        <h1 className='text-7xl font-semibold text-gray-700'>Your Cart is Empty</h1>
        <p className='text-base font-medium text-gray-600 w-[800px] text-center'>Looks like you haven't added any items to your cart yet. Browse our selection to find what you need.</p>
        <button onClick={startShopping} className='font-medium bg-blue-700 text-white p-3 rounded-lg'>Start Shopping Now</button>
    </div>
  )
}

export default EmptyCart