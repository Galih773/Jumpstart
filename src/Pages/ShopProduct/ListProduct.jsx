import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { addToCart } from '../../API/axios'

const ListProduct = ({result, user}) => {
  const navigate = useNavigate()
  const addCartHandler = (id) => {
    
    if(user?.name){
      addToCart({product_id: id, quantity: 1}).then(response => {
        console.log(response.data)
        return navigate('/cart')

      }).catch(error => {
        return navigate('/cart')
      })
    } else {
      return navigate("/login")
    }
  }

  return (
    <>
        {result?.length > 0 ? result.map((product, index)=>(
            <div key={index} className='w-[287.5px] h-[482px] border border-gray-200 p-5 font-semibold flex flex-col justify-between'>
                <div className='w-full h-auto relative'>
                  <img src={"http://127.0.0.1:8000/storage/" + product.photos[0].url} className="w-full rounded-lg" alt="" />
                  {product.discount > 0 && (
                    <span className='bg-red-500 absolute top-0 p-1 text-white text-xs'>{product.discount}% Off</span>
                  )}
                </div>

                <div className='h-[193px] flex flex-col justify-between'>
                  <div className='h-[93px] flex flex-col justify-between'>
                    <h1 className='text-blue-700'>{product.name}</h1>
                    <h2 className='text-lg w-fit flex gap-2'>
                      <span>$ {product.discount ? (product.price - (product.price * product.discount / 100)) : product.price}</span>
                      {
                        product.discount > 0 && (
                          <span className='relative'>
                            <span className='border-[2px] border-red-500 absolute top-[40%] left-0 w-full rotate-[-20deg]'></span>
                            <s className='text-gray-500'>$ {product.price}</s>
                          </span>
                        )
                      }

                    </h2>
                  </div>

                  <div className='h-[90px] flex flex-col justify-between text-sm'>
                    <button onClick={()=>addCartHandler(product.id)} className='w-full h-[40px] bg-yellow-400 border border-yellow-400'>
                      {user?.name ? "ADD TO CART" : "Login for Add to Cart"}
                    </button>

                    <NavLink to={`/shop/${product.slug}`} state={{productId:product.id}}>
                      <button className='w-full h-[40px] text-gray-500 border border-gray-300 hover:text-black hover:bg-gray-300'>
                        VIEW
                      </button>
                    </NavLink>
                  </div>
                </div>
            </div>
        ))
        :
        (
        <div className='w-full h-[100px] border border-gray-200 flex items-center'>
            <div className='w-fit mx-auto'>
                There is no data available
            </div> 
        </div>
        )
        }
    </>
  )
}

export default ListProduct