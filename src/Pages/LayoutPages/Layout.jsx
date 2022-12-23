import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { seeCart } from '../../API/axios'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({})

  const [loading, setLoading] = useState(true)

  const [totalCart, setTotalCart] = useState(0);
  
  // token
  const token = localStorage.getItem("token");

  const fectData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.post('http://127.0.0.1:8000/api/auth/me')
    .then(response => {
        setUser(response.data)
        setLoading(false)
        seeCart().then(response => {
          let subtotal = 0
          response.data.forEach(element => {
            subtotal += (element.price - (element.price * element.discount / 100)) * element.quantity
          });
          setTotalCart(subtotal)
          
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
      setLoading(false)
      console.log("Unauthorize")
      setUser({})
      localStorage.removeItem('token')
    })
  }

  useEffect(() => {
    if(token){
      fectData();
    } else {
      setLoading(false)
    }
  },[ token])

  return (
    <>
        <Header user={user} totalCart={totalCart} setUser={setUser}/>
        {!loading && (<Outlet context={[user, totalCart, setTotalCart]}/>)}
        <Footer />
    </>
  )
}

export default Layout