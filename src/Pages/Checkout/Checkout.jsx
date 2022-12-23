import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import CheckoutMethod from './CheckoutMethod'
import uuid from 'react-uuid';
import { checkOut, seeCart } from '../../API/axios';
import { toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const [payment, setPayment] = useState("Card Payment")
    const [shipment, setShippment] = useState("Regular Shipment")
    const [totalItem, setTotalItem] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [shippingPrice, setShippingPrice] = useState()
    const [totalPrice, setTotalPrice] = useState(0)
    const [validation, setValidation] = useState([])
    const [user]  = useOutletContext()
    const navigate = useNavigate();
    
    const [dataForm, setDataForm] = useState({
        uuid: uuid().slice(0,4),
        name : user.name,
        email : user.email,
        phone: "",
        country: "",
        state: "",
        city:"",
        shipment_method: "",
        payment_method: "",
        total_price: totalPrice
    })

    const fectCartHandler = () => {
        seeCart().then(response => {
            countingCart(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const countingCart = (cartItem) => {
        let subtotal = 0;
        let totalItem = 0
        cartItem.forEach(element => {
            subtotal += (element.price - (element.price * element.discount / 100)) * element.quantity
            totalItem += 1
        });
        setSubTotal(subtotal)
        setTotalItem(totalItem)
    }

    useEffect(()=> {
        if(user?.name){
            fectCartHandler();
        } else {
            navigate("/login")
        }
    },[user?.name])

    useEffect(()=>{
        setShippingPrice(shipment === "Regular Shipment" ? subTotal/10 : subTotal*1.5/10)
        setTotalPrice(subTotal + shippingPrice)
        setDataForm({...dataForm, total_price:totalPrice, shipment_method: shipment, payment_method: payment})
    },[shipment, shippingPrice, subTotal, totalPrice])

    const handleSubmit = () => {
        const id = toast.loading("Please wait, Connecting with Stripe...")
        checkOut(dataForm).then(response => {
            toast.update(id, { render: "Configuring Payment Done", type: "success", isLoading: false })
            window.location.replace(response.data.url)
        }).catch(error => {
            toast.update(id, { render: "Input Error", type: "error", isLoading: false })
            setValidation(error.response.data)
        })
    }

    return (
        <div className='min-h-[100vh] bg-white pt-[20px] pb-[40px] flex flex-col gap-5'>
            {/* Breadcrumb */}
            <div className='mx-auto w-[78%] text-sm font-medium'>
                <span className='text-gray-400'>Home </span>
                <span className='text-gray-400'>/ Cart </span>
                <span>/ Checkout </span>
            </div>

            <div className='mx-auto min-h-[165px] w-[78%] flex justify-between'>
                <div className='w-[900px] flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>Billing Address</h1>

                    <div>
                        <span className='font-medium text-lg'>Full Name</span>
                        <input className='w-full h-[48px] mt-2 rounded-lg border p-2 border-gray-300' value={dataForm.name} onChange={(e)=>setDataForm({...dataForm, name: e.target.value})} type="text" />
                        {
                            validation.name && validation.name.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div>
                        <span className='font-medium text-lg'>Email Address</span>
                        <input className='w-full h-[48px] mt-2 rounded-lg border p-2 border-gray-300' value={dataForm.email} onChange={(e)=>setDataForm({...dataForm, email: e.target.value})} type="text" />
                        {
                            validation.email && validation.email.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div>
                        <span className='font-medium text-lg'>Phone Number</span>
                        <input className='w-full h-[48px] mt-2 rounded-lg border p-2 border-gray-300' value={dataForm.phone} onChange={(e)=>setDataForm({...dataForm, phone: e.target.value})} type="text" />
                        {
                            validation.phone && validation.phone.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div className='flex gap-4'>
                        <div>
                            <span className='font-medium text-lg'>Country</span>
                            <input className='w-full h-[48px] mt-2 rounded-lg border p-2 border-gray-300' value={dataForm.country} onChange={(e)=>setDataForm({...dataForm, country: e.target.value})} type="text" />
                            {
                                validation.country && validation.country.map((error, index) => (
                                    <span key={index} className='font-medium text-red-500'>{error}</span>
                                ))
                            }
                        </div>
                        <div>
                            <span className='font-medium text-lg'>State</span>
                            <input className='w-full h-[48px] mt-2 rounded-lg border p-2 border-gray-300' value={dataForm.state} onChange={(e)=>setDataForm({...dataForm, state: e.target.value})} type="text" />
                            {
                                validation.state && validation.state.map((error, index) => (
                                    <span key={index} className='font-medium text-red-500'>{error}</span>
                                ))
                            }
                        </div>
                        <div>
                            <span className='font-medium text-lg'>City</span>
                            <input className='w-full h-[48px] mt-2 rounded-lg border p-2 border-gray-300' value={dataForm.city} onChange={(e)=>setDataForm({...dataForm, city: e.target.value})} type="text" />
                            {
                                validation.city && validation.city.map((error, index) => (
                                    <span key={index} className='font-medium text-red-500'>{error}</span>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className='min-w-[440px] bg-abu p-[21px] font-medium'>
                    <div className='border-b-[1px] border-gray-300 pb-[20px]'>
                        <h1 className='text-2xl font-semibold'>Order Summary</h1>
                    </div>

                    <div className='py-[15px] border-b-[1px] border-gray-300'>
                        <div className='h-[44px] flex justify-between items-center'>
                            <p>Subtotal ({totalItem} items)</p>
                            <p>$ {subTotal}</p>
                        </div>

                        <div className='h-[44px] flex justify-between items-center'>
                            <p>Shipping</p>
                            <p>$ {shippingPrice}</p>
                        </div>

                        <div className='h-[44px] flex justify-between items-center'>
                            <p>Taxes</p>
                            <p>$ 00.00</p>
                        </div>
                    </div>

                    <div className='py-[15px] border-b-[1px] border-gray-300'>
                        <div className='h-[44px] flex justify-between items-center'>
                            <p>Shipment Method</p>
                            <p>{shipment}</p>
                        </div>

                        <div className='h-[44px] flex justify-between items-center'>
                            <p>Payment Method</p>
                            <p>{payment}</p>
                        </div>
                    </div>

                    <div className='py-[15px] border-b-[1px] text-blue-700'>
                        <div className='h-[44px] flex justify-between items-center text-xl font-semibold'>
                            <p>Total</p>
                            <p>$ {totalPrice}</p>
                        </div>
                    </div>



                    <NavLink to="/cart/checkout">
                        <button onClick={handleSubmit} className='w-full h-[50px] bg-yellow-400 rounded-sm'>
                            CHECKOUT
                        </button>
                    </NavLink>

                </div>
            </div>

            <div className='mx-auto min-h-[165px] w-[78%] flex gap-10 mt-4'>

                <CheckoutMethod nameMethod={"Payment Method"}
                    listMethodItem={["Card Payment", "Payment On Delivery"]}
                    method={payment}
                    setMethod={setPayment}
                />

                <CheckoutMethod nameMethod={"Shipment Method"}
                    listMethodItem={["Regular Shipment", "Express Shipment"]}
                    method={shipment}
                    setMethod={setShippment}
                />

            </div>
            <ToastContainer />
        </div>
    )
}

export default Checkout