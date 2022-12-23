import React from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io'

const CheckoutMethod = ({nameMethod, listMethodItem, method, setMethod}) => {
  return (
    <>
        <div className='w-full flex flex-col gap-5'>
            <h1 className='text-2xl font-semibold'>{nameMethod}</h1>
            
            <div className='flex flex-col gap-5'>
                {
                    listMethodItem.map((item, index)=>(
                        <div key={index} className='font-medium group text-sm flex items-center gap-3 cursor-pointer p-3 border border-gray-300 rounded-lg' onClick={()=>setMethod(item)}>
                            <IoMdCheckmarkCircle className={`text-lg border-[0.5px] rounded-full ${method === item ? "text-yellow-400 border-yellow-400" : "text-white border-gray-400"}`}></IoMdCheckmarkCircle>
                            <span className={`text-base group-hover:text-black group-hover:border-yellow-400
                                                ${method === item ? "text-black" : "text-gray-500"}`}>{item}</span>
                        </div>
                    ))
                }

                {/* <div className='font-medium group text-sm flex items-center gap-3 cursor-pointer p-3 border border-gray-300 rounded-lg' onClick={()=>setMethod("Payment On Delivery")}>
                    <IoMdCheckmarkCircle className={`text-lg border-[0.5px] rounded-full ${method === "Payment On Delivery" ? "text-yellow-400 border-yellow-400" : "text-white border-gray-400"}`}></IoMdCheckmarkCircle>
                    <span className={`text-base group-hover:text-black group-hover:border-yellow-400
                                    ${method === "Payment On Delivery" ? "text-black" : "text-gray-500"}`}>Payment On Delivery</span>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default CheckoutMethod