import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { addToCart, deleteCart, descreaseCart } from '../../API/axios'
import { toast } from 'react-toastify';

const ListCart = ({cart, fectCartHandler}) => {
    const [loading , setLoading] = useState(false)
    const plusAmount=async(id)=>{
        setLoading(true)
        addToCart({product_id: id, quantity: 1}).then(response => {
            fectCartHandler()
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            toast.error(error.response.data.message)
            
        })
    }

    const minusAmount= async (id) =>{
        setLoading(true)
        await descreaseCart({product_id: id}).then(response=>{
            fectCartHandler()
            setLoading(false)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteCartHandler = async (id) => {
        setLoading(true)
        await deleteCart({product_id: id}).then(response=>{
            fectCartHandler()
            setLoading(false)
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className='w-[900px]'>
        <table className='w-full'>
            <thead>
                <tr className='h-[95px] border-b-[1px] border-gray-300'>
                    <th>Delete</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody className='font-medium'>
                {!loading && cart.map((item, index)=>(
                    <tr key={index} className='h-[95px] border-b-[1px] border-gray-300'>
                        <td className='flex justify-center items-center text-2xl h-full'>
                            <RxCross2 onClick={()=>deleteCartHandler(item.product_id)} className='mx-auto w-[100px] cursor-pointer hover:text-red-500'></RxCross2>
                        </td>
                        <td className='w-[340px] p-[15px] h-full'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-[70px] aspect-square rounded-lg'>
                                    <img src={"http://127.0.0.1:8000/storage/" + item.url} className="w-full h-full object-cover" alt="" />
                                </div>

                                <p className='text-base text-blue-700'>{item.name}</p>
                            </div>
                        </td>
                        <td className='w-[100px]'>
                            <div className='w-fit mx-auto'>   
                                $ {item.price - (item.price * item.discount / 100)}
                            </div>
                        </td>
                        <td className='w-fit'>
                            <div className='mx-auto w-[125px] h-[50px] border-gray-400 border rounded-sm flex justify-around items-center'>
                                <AiOutlineMinus className='cursor-pointer' onClick={()=>minusAmount(item.product_id)}></AiOutlineMinus>
                                <span>{item.quantity}</span>
                                <AiOutlinePlus className='cursor-pointer' onClick={()=>plusAmount(item.product_id)}></AiOutlinePlus>
                            </div>
                        </td>
                        <td className='w-[150px]'>
                            <div className='w-fit mx-auto'>   
                                $ {(item.price - (item.price * item.discount / 100)) * item.quantity}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default ListCart