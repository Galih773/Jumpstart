import React from 'react'
import { NavLink } from 'react-router-dom'

const CartSummary = ({totalCart}) => {
  return (
    <div className='min-w-[440px] bg-abu p-[21px] font-medium'>
        <div className='border-b-[1px] border-gray-300 pb-[20px]'>
            <h1 className='text-2xl font-semibold'>Cart Totals</h1>
        </div>

        <div className='py-[15px] border-b-[1px] border-gray-300'>
            <div className='h-[44px] flex justify-between items-center'>
                <p>Subtotal</p>
                <p>$ {totalCart}</p>
            </div>

            <div className='h-[44px] flex justify-between items-center'>
                <p>Shipping</p>
                <p>Calculed at checkout</p>
            </div>

            <div className='h-[44px] flex justify-between items-center'>
                <p>Taxes</p>
                <p>$00.00</p>
            </div>
        </div>

        <div className='py-[15px] border-b-[1px]'>
            <div className='h-[44px] flex justify-between items-center text-lg font-semibold'>
                <p>Total</p>
                <p>$ {totalCart}</p>
            </div>
        </div>

        <NavLink to="/cart/checkout">
            <button className='w-full h-[50px] bg-yellow-400 rounded-sm'>
                CHECKOUT
            </button>
        </NavLink>

    </div>
  )
}

export default CartSummary