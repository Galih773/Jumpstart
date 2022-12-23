import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { seeCart } from '../../API/axios';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import ListCart from './ListCart';

const Cart = () => {
    
    const navigate = useNavigate();
    const [user, totalCart, setTotalCart]  = useOutletContext()
    const [cart, setCart] = useState([])
    const [loading , setLoading] = useState(true)

    const fectCartHandler = () => {
        seeCart().then(response => {
            setCart(response.data)
            countingCart(response.data)
            setLoading(false)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const countingCart = (cartItem) => {
        let subtotal = 0;
        cartItem.forEach(element => {
            subtotal += (element.price - (element.price * element.discount / 100)) * element.quantity
        });
        setTotalCart(subtotal)
    }

    useEffect(()=> {
        if(user?.name){
            fectCartHandler()
        } else {
            navigate("/login")
        }
    },[user?.name])

  return (
    <div className='min-h-[100vh] bg-cream pt-[20px] pb-[40px] flex flex-col gap-5'>
        {/* Breadcrumb */}
        <div className='mx-auto w-[78%] text-sm font-medium'>
            <span className='text-gray-400'>Home </span>
            <span>/ Cart </span>
        </div>
        { !loading &&
            cart.length > 0 ? (
                <div className='mx-auto min-h-[165px] w-[78%] flex justify-between'>

                    <ListCart cart={cart} fectCartHandler={fectCartHandler} setLoading={setLoading} loading={loading} />

                    <CartSummary totalCart={totalCart}/>

                </div>
            ) : (
                <EmptyCart />
            )
        }
        <ToastContainer />
    </div>
  )
}

export default Cart