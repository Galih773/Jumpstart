import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getPopularProducts } from '../../API/axios'
import Brand from './Brand'
import Herobanner from './Herobanner'
import PopularCategories from './PopularCategories'
import TopDeals from './TopDeals'
import TrendingProduct from './TrendingProduct'

const Landing = () => {
  const [popularProduct, setPopularProduct] = useState([])
  const [user]  = useOutletContext()

  useEffect(()=>{
    getPopularProducts().then(product =>{
      setPopularProduct(product)
    })
  },[])

  return (
    <div className='min-h-[100vh] bg-white flex flex-col pt-[30px] gap-14'>
        <Herobanner/>
        <TrendingProduct popularProduct={popularProduct}/>
        <PopularCategories />
        <TopDeals popularProduct={popularProduct} user={user}/>
        <Brand/>
    </div>
  )
}

export default Landing