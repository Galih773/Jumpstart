import React from 'react'

const Footer = () => {
  return (
    <footer className="max-h-[600px] bg-hitam text-white flex flex-col items-center">
      <div className="w-[78%] flex justify-between py-[60px] border-b-[1px] border-abu">
        <div className='w-fit'>
          <p className='font-bold text-lg'>My Account</p>

          <div className='mt-5 flex flex-col gap-2'>
            <p>Search</p>
            <p>Product Suport</p>
            <p>Checkout</p>
            <p>Shopping Cart</p>
            <p>Wishlist</p>
            <p>New Arrivals</p>
          </div>
        </div>

        <div className='w-fit'>
          <p className='font-bold text-lg'>My Account</p>

          <div className='mt-5 flex flex-col gap-2'>
            <p>Search</p>
            <p>Product Suport</p>
            <p>Checkout</p>
            <p>Shopping Cart</p>
            <p>Wishlist</p>
            <p>New Arrivals</p>
          </div>
        </div>

        <div className='w-fit'>
          <p className='font-bold text-lg'>My Account</p>

          <div className='mt-5 flex flex-col gap-2'>
            <p>Search</p>
            <p>Product Suport</p>
            <p>Checkout</p>
            <p>Shopping Cart</p>
            <p>Wishlist</p>
            <p>New Arrivals</p>
          </div>
        </div>

        <div className='w-[471px]'>
          <p className='font-bold text-lg'>Subcribe To Our Newsletter</p>

          <div className='mt-5'>
            <p>Join 60.000+ subscribers and get a new discount coupon <br/> on every Saturday.</p>
            <form className="flex h-[50px] my-5">
                <div className="w-full">
                    <input type="search" id="search-dropdown" className="w-full h-full rounded-l-lg p-2.5" placeholder="Your Email Address..." required />
                </div>

                <button type="submit" className="font-semibold text-white rounded-r-[10px] bg-yellow-400 w-[125px] ">
                  Subscribe
                </button>
            </form>
            <p>I would like to receive news and special offers.</p>
            <p>Mail: jumpstart@gmail.com</p>
          </div>
        </div>
        
      </div>
      <div className="py-[60px]">
        <span>© 2021 Jumpstart, All Rights Reserved. Powered by Galih</span>
        <span className="login-text41"></span>
        <span></span>
      </div>
    </footer>
  )
}

export default Footer