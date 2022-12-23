import React from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io'

const FilterProduct = ({filterName, listFilterItems, filter, setFilter}) => {
  return (
    <div className='w-full h-fit border border-200 p-[20px] flex flex-col gap-4'>
        <div className='w-full border-b-[1px] border-abu] text-lg font-medium pb-2'>
        Filter By {filterName}
        </div>
        <div className='flex flex-col gap-3'>
            <div className='font-medium group text-sm flex items-center gap-3 cursor-pointer' onClick={()=>setFilter("")}>
                <IoMdCheckmarkCircle className={`text-lg border-[0.5px] rounded-full ${filter === "" ? "text-yellow-400 border-yellow-400" : "text-white border-gray-400"}`}></IoMdCheckmarkCircle>
                <span className={`text-base group-hover:text-yellow-400 group-hover:border-yellow-400
                                    ${filter === "" ? "text-yellow-400" : "text-gray-500"}`}>All {filterName}</span>
            </div>

            {listFilterItems.map((item, index)=>(
                <div key={index} className='font-medium group text-sm flex items-center gap-3 cursor-pointer' onClick={()=>setFilter(item)}>
                    <IoMdCheckmarkCircle className={`text-lg border-[0.5px] rounded-full ${filter === item ? "text-yellow-400 border-yellow-400" : "text-white border-gray-400"}`}></IoMdCheckmarkCircle>
                    <span className={`text-base group-hover:text-yellow-400 group-hover:border-yellow-400
                                        ${filter === item ? "text-yellow-400" : "text-gray-500"}`}>{item}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FilterProduct