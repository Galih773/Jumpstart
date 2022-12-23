import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { registration } from '../../API/axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        if(localStorage.getItem('token')){
            navigate('/')
        }
    },[])

    const registerHandler = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation)

        await registration(formData).then(response => {
                console.log(response)
                navigate('/login');
            })
            .catch(error => {
                console.log(error.response.data)
                setValidation(error.response.data)
            })

    }

    return (
        <div className='bg-[#FAFAFA] w-[100%] min-h-[100vh] pb-8'>
            <div className='px-16 pt-9'>
                <NavLink to="/" className="font-medium text-4xl">
                    <span className="font-subrayada text-blue-700">JUMP</span>
                    <span className="font-subrayada text-yellow-400">START</span>
                </NavLink>
            </div>

            <div className="mx-auto w-[500px] bg-abu rounded-lg flex p-[8px] justify-between mt-3">
                <NavLink to="/login">
                    <button className="w-[233px] h-[58px] border-none">
                        Login
                    </button>
                </NavLink>
                
                <NavLink to="/register">
                    <button className="w-[239px] bg-blue-700 text-white rounded-lg h-[58px] ">
                        Register
                    </button>
                </NavLink>
            </div>

            <form onSubmit={registerHandler} className="mx-auto mt-8 w-[670px] min-h-[670px] px-8 py-10 flex flex-col justify-between bg-white rounded-lg">
                <div className='mb-5'>
                    <h1 className='text-4xl font-medium'>Hello there</h1>
                    <span className='text-base font-medium'>Sign Up to get started</span>
                </div>

                <div className="flex flex-col gap-5 min-h-[400px]">
                    <div>
                        <span className='font-medium'>Fullname</span>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} className='w-full h-[48px] mt-2 rounded-lg border p-2 border-abu' type="text" />
                        {
                            validation.name && validation.name.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div>
                        <span className='font-medium'>Email Address</span>
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='w-full h-[48px] mt-2 rounded-lg border p-2 border-abu' type="text" />
                        {
                            validation.email && validation.email.map((error,index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div className="login-frame7">
                        <span className='font-medium'>Password</span>
                        <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} className='w-full h-[48px] mt-2 mb-[5px] rounded-lg border p-2 border-abu'/>
                        {
                            validation.password && validation.password.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div className="login-frame7">
                        <span className='font-medium'>Confirm Password</span>
                        <input type='password' value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}} className='w-full h-[48px] mt-2 mb-[5px] rounded-lg border p-2 border-abu' />
                    </div>

                </div>

                <button type='submit' className='w-full h-[64px] bg-blue-700 text-white mt-5 rounded-lg'>Register</button>
            </form>
        </div>
    )
}

export default Register