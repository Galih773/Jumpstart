import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {RiShoppingBag3Line, RiLogoutBoxRLine} from 'react-icons/ri'
import {CgSearch} from 'react-icons/cg'
import {FaRegUser} from 'react-icons/fa'
import { logOut } from '../../API/axios'

const Header = ({user, setUser, totalCart}) => {

  const [search, setSerach] = useState('')

  const navigate = useNavigate();

  let location = useLocation();

  useEffect(()=>{
    if(location.state?.search != null){
      setSerach(location.state.search)
    } else {
      setSerach('')
    }
    
  }, [location.state?.search])

  const handleSumbit = (e) => {
    e.preventDefault()

    navigate('/shop', {state:{"search":search}})
  }  

  const logoutHandler = async() => {
    await logOut().then(response => {
      localStorage.removeItem("token")
      setUser({})
      console.log(response)
      navigate('/login')
    })
  }

  return (
    <div className='max-h-[164px] bg-blue-700 flex flex-col items-center'>
      <div className='h-[109px] w-[78%] flex justify-between items-center border-b-[1px] border-abu'>
          
          <div className='width-[300px]'>
            <NavLink to="/" className="font-medium text-4xl">
                <span className="font-subrayada text-white">JUMP</span>
                <span className="font-subrayada text-yellow-400">START</span>
            </NavLink>
          </div>

          <div className='w-[53%]'>
              <form onSubmit={handleSumbit} className="flex h-[50px]">
                <div className="w-full">
                    <input type="search" id="search-dropdown" value={search} onChange={(e) => setSerach(e.target.value)} className="w-full h-full rounded-l-lg p-2.5" placeholder="Search Phone, Laptop, Tablet..." />
                </div>

                <button type="submit" className="font-extrabold text-white rounded-r-[10px] bg-yellow-400 w-[50px] ">
                  <CgSearch className='mx-auto text-2xl'></CgSearch>
                </button>
              </form>
          </div>

          <div className='flex min-w-fit min-h-[30px] gap-5'>
            {
              user?.name ? (
                <>
                  <NavLink to="/cart" className='flex text-white items-center gap-3 hover:text-yellow-400'>
                    <div className='text-4xl'>
                      <RiShoppingBag3Line></RiShoppingBag3Line>
                    </div>

                    <div>
                      <p className='font-light text-sm'>Your Cart:</p>
                      <p className='text-base font-medium'>$ {totalCart}</p>
                    </div>
                  </NavLink>

                  <div onClick={logoutHandler} className='flex text-white items-center gap-3 hover:text-yellow-400 cursor-pointer'>
                    <div className='text-[34px]'>
                      <RiLogoutBoxRLine></RiLogoutBoxRLine>
                    </div>

                    <div>
                      <p className='font-light text-sm'>Logout</p>
                      <p className='text-base font-medium'>{user.name}</p>
                    </div>
                  </div>

                </>
              ) : (
                <NavLink to="/login" className='flex text-white items-center gap-3 hover:text-yellow-400'>
                  <div className='text-[33px]'>
                    <FaRegUser></FaRegUser>
                  </div>

                  <div>
                    <p className='font-light text-sm'>Login</p>
                    <p className='text-base font-medium'>Login/Register</p>
                  </div>
                </NavLink>
              )
            }
          </div>
          
      </div>

      <div className='h-[55px] w-[78%] flex justify-between items-center'>
        <div className='flex gap-5 h-full items-center text-white'>
          <NavLink to="/" className='hover:text-yellow-400'>Home</NavLink>
          <NavLink to="/shop" className='hover:text-yellow-400'>Shop</NavLink>
          <NavLink className='hover:text-yellow-400'>About</NavLink>
          <NavLink className='hover:text-yellow-400'>Contact Us</NavLink>
        </div>

        <div className='text-white'>
          <p>Spend $120 more and get free shipping!</p>
        </div>
      </div>
      </div>
  )
}

export default Header