import React, { useEffect, useState } from 'react'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { NavLink, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { addToCart, getDetailProduct } from '../../API/axios';

const DetailProduct = () => {

  const [amount, setAmount] = useState(1);
  const [maxAmount, setMaxAmout] = useState('')
  const [detail, setDetail] = useState([])
  const [showImg, setShowImg] = useState()
  const [loading, setLoading] = useState(true)
  const [user]  = useOutletContext()

  let location = useLocation();

  const navigate = useNavigate()

  useEffect(()=>{
    if(location.state?.productId !== undefined){

      getDetailProduct(location.state.productId).then(detailProduct => {
        setDetail(detailProduct)
        setShowImg(detailProduct.photos[0].url)
        setLoading(false)
        return detailProduct
      })
      
    } else {
      return navigate('/shop')
    }
  },[location.state?.productId])

  const plusAmount=()=>{
    if(amount < detail.stock){
      setMaxAmout('')
      setAmount(amount => amount + 1)
    } else {
      setMaxAmout('Max')
    } 
  }

  const minusAmount= () =>{
    if(amount > 1){
      setMaxAmout('')
      setAmount(amount => amount - 1)
    }
  }

  const countDiscount = (price, discount) => {
    console.log(discount)
    return price * discount / 100
  }

  const addCartHandler = () => {
    console.log(detail.id + " " + amount)
    
    if(user?.name){
      addToCart({product_id: detail.id, quantity: amount}).then(response => {
        console.log(response.data)
        return navigate('/cart')

      }).catch(error => {
        console.log(error)

      })
    } else {
      return navigate("/login")
    }
  }

  return (
    <div className='min-h-[100vh] bg-cream pt-[20px] pb-[40px] flex flex-col gap-5'>
      {/* Breadcrumb */}
      <div className='mx-auto w-[78%] text-sm font-medium'>
          <NavLink to={'/'} className='text-gray-400 cursor-pointer'>Home </NavLink>
          <NavLink to={'/shop'} className='text-gray-400 cursor-pointer'>/ Shop </NavLink>
          <span>/ {detail.name}</span>
      </div>

      {/*Seciton 1*/}
      <div className='mx-auto w-[78%] min-h-[595px] flex justify-between'>
        <div className='w-[47%] aspect-square rounded-lg flex justify-between'>
          <div className='w-[95px] flex flex-col gap-4'>
            {!loading && detail.photos.map((img, index)=>(
              <img key={index} src={"http://127.0.0.1:8000/storage/" + img.url} onClick={()=> setShowImg(img.url)} className={`w-full object-cover rounded-lg border hover:border-gray-500 cursor-pointer ${img.url === showImg && "border-gray-500"}`} alt="" />
            ))}
            
          </div>

          <div className='w-[595px]'>
            {!loading && (
              <img src={"http://127.0.0.1:8000/storage/" + showImg} className="w-full rounded-lg" alt="" />
            )}
            
          </div>
        </div>

        <div className='w-[47%]'>
          <div className='flex flex-col gap-3 pb-5 border-b-2 border-gray-200'>
            <h1 className='text-3xl font-semibold text-blue-700'>{detail.name}</h1>

            <div className='flex gap-3 items-center text-gray-500'>
              <span className='flex items-center gap-1 text-yellow-400'>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarFill></BsStarFill>
                <BsStarHalf></BsStarHalf>
              </span>
              <span>/</span>
              <span>2 Review</span>
              <span>/</span>
              <span>Write a Review</span>
            </div>

            <h1 className='text-4xl font-semibold text-red-600 flex gap-3'>
              <span>$ {detail.discount > 0 ? (detail.price - countDiscount(detail.price, detail.discount)) : detail.price}</span>
              {
                detail.discount > 0 && (
                  <span className='relative w-fit'>
                    <s className='text-gray-500 text-lg'>$ {detail.price}</s>
                    <span className='border-[2px] border-red-500 absolute bottom-[30%] left-0 w-full rotate-[-20deg]'></span>
                  </span>
                )
              }
            </h1>
          </div>

          <div className='pt-5 flex flex-col gap-5'>
            <p className='text-gray-700'>
              {detail.description?.slice(0, 500)}....
              <span>View More</span>
            </p>

            <div className='flex justify-between h-[50px] font-medium'>
              <div className='w-[125px] border-gray-400 border rounded-sm flex justify-around items-center'>
                <AiOutlineMinus className='cursor-pointer' onClick={minusAmount}></AiOutlineMinus>
                <span>{amount}</span>
                {maxAmount ? (
                  <span className="text-red-500">{maxAmount}</span>
                ) : (
                  <AiOutlinePlus className="cursor-pointer" onClick={plusAmount}></AiOutlinePlus>
                )}
              </div>

              <button onClick={addCartHandler} className='w-[543px] bg-yellow-400 rounded-sm'>
              {user?.name ?  "ADD TO CART": "Login for Add to Cart"}
              </button>
            </div>

            <div className='text-gray-700 flex flex-col gap-3'>
              <p>Real Time : 14 Visitor now</p>
              <p>Available : {detail.stock} Stocts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='mx-auto w-[78%] mt-[60px] flex flex-col gap-8'>
        <div className='h-[45px] flex justify-center border-b-[1px] border-gray-300'>
          <p className='text-2xl text-yellow-400 font-medium h-full w-fit border-b-2 border-yellow-400'>Details Description</p>
        </div>

        <div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct