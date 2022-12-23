import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()

    const startShopping = () => {
        navigate("/shop")
    }

  return (
    <div className='min-h-[100vh] bg-cream pt-[20px] pb-[40px] flex flex-col gap-5'>
        <div className='w-fit mx-auto mt-10 flex flex-col items-center gap-5'>
            <img src={process.env.PUBLIC_URL+"/img/success.webp"} alt="emptycart" className='w-[400px] h-[400px] object-cover rounded-full'/>
            <h1 className='text-7xl font-semibold text-gray-700'>Congratulations</h1>
            <p className='text-base font-medium text-gray-600 w-[800px] text-center'>Your order has been placed successfully! Thank you for shopping with us.</p>
            <p className='text-base font-medium text-gray-600 w-[800px] text-center'>Order ID: 1j34h3</p>
            <button onClick={startShopping} className='font-medium bg-blue-700 text-white p-3 rounded-lg'>Back to Shop</button>
        </div>
    </div>
  )
}

export default Success