import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useOutletContext } from 'react-router-dom'
import {getProducts} from '../../API/axios'
import FilterProduct from './FilterProduct'
import ListProduct from './ListProduct'

const Shop = () => {

  const [categories, setCategories] = useState('')
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [search, setSerach] = useState('')
  const [filterResult, setFilterResult] = useState([])
  const [user]  = useOutletContext()

  let location = useLocation();

  useEffect(()=>{

    if(location.state?.search !== undefined){
      setSerach(location.state.search)
    }
    setCategories('')
    setBrand('')
    setColor('')
  }, [location.state?.search])

  useEffect(()=>{
    getProducts(search,categories,brand,color).then(product => {
      setFilterResult(product)
    })
  },[brand, categories, color, search])

  return (
    <div className='min-h-[100vh] bg-cream pt-[20px] pb-[40px] flex flex-col gap-5'>
        {/* Breadcrumb */}
        <div className='mx-auto w-[78%] text-sm font-medium'>
            <NavLink to={'/'} className='text-gray-400 cursor-pointer'>Home </NavLink>
            <span>/ Shop</span>
        </div>

        {/* Main Seciton */}
        <div className='mx-auto w-[78%] flex justify-between'>
          {/* Filter */}
          <div className='w-[270px] min-h-[1069px] flex flex-col gap-4'>
            <FilterProduct filterName="Categories"
              listFilterItems={["Phone", "Tablet", "Laptop", "Headset"]}
              filter={categories}
              setFilter={setCategories}
            />

            <FilterProduct filterName="Brands"
              listFilterItems={["Xiaomi", "Apple", "Huawei", "Lenovo"]}
              filter={brand}
              setFilter={setBrand}
            />

            <FilterProduct filterName="Color"
              listFilterItems={["Black", "Gold", "White"]}
              filter={color}
              setFilter={setColor}
            />
          </div>

          {/* List Product */}
          <div className='w-[1150px] min-h-[1069px]'>
            <div className='text-3xl font-semibold mb-[30px]'>
              {!categories ? "All Product"  : categories} {search && `- "${search}"`} {brand && brand !==search && `- "${brand}"`} {color && `- "${color}"`}
            </div>

            <div className='border border-gray-200 text-gray-500 text-base h-[58px] p-4'>
                Show {filterResult.length} Product
            </div>

            <div className='flex flex-wrap'>
              {/* Item */}
              <ListProduct result={filterResult} user={user}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop