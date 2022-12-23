import React from 'react'

const Herobanner = () => {
  return (
    <div className='mx-auto w-[78%] h-[416px] flex gap-7'>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/redheadset.webp"})`}} className='w-[70%] h-full bg-cover bg-center rounded-[30px] p-16'>
            <div className='w-[50%] h-full flex flex-col justify-between text-white'>
                <div className='w-full flex flex-col gap-4'>
                    <h1 className='text-4xl'>Gaming  Headset <br/> Brilliant  Lighting  Effect</h1>
                    <p className=''>Wireless Connection With TV, Computer, Laptop...</p>
                </div>
                
                <button className='w-[47%] h-[17%] font-medium border border-white rounded-[30px] hover:bg-white hover:text-black'>Discover Now</button>
            </div>
        </div>

        <div className='w-[30%] h-full flex flex-col justify-between gap-7'>
            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/phone.webp"})`}} className='w-full h-full flex flex-col justify-between bg-cover bg-center rounded-[30px] text-white p-12'>
                <h1 className='text-2xl'>Phone <br/> Galaxy S20</h1>
                <p className=''>Cellphone & Tablets</p>
            </div>

            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/img/miniheadset.webp"})`}} className='w-full h-full flex flex-col justify-between bg-cover bg-center rounded-[30px] text-white p-12'>
                <h1 className='text-2xl'>Canyon <br/> Star Raider</h1>
                <p className=''>Headphone & Audio</p>
            </div>
        </div>
    </div>
  )
}

export default Herobanner