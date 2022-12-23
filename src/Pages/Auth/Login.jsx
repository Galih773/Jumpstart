import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //validation
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(()=> {
        if(localStorage.getItem('token')){
            navigate('/')
        }
    },[])

    const loginHandler = async(e) => {
        e.preventDefault()

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        console.log(formData)

        await axios.post('http://127.0.0.1:8000/api/auth/login', formData)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.access_token)

                navigate('/')
            })
            .catch(error => {
                console.log(error.response.data)
                setValidation(error.response.data)
            })
    }
    return (
        <div className='bg-[#FAFAFA] w-[100%] min-h-[100vh] pb-3'>
            <div className='px-16 pt-9'>
                <NavLink to="/" className="font-medium text-4xl">
                    <span className="font-subrayada text-blue-700">JUMP</span>
                    <span className="font-subrayada text-yellow-400">START</span>
                </NavLink>
            </div>

            <div className="mx-auto w-[500px] bg-abu rounded-lg flex p-[8px] justify-between mt-3">
                <NavLink to="/login">
                    <button className="w-[233px] h-[58px] bg-blue-700 text-white rounded-lg">
                        Login
                    </button>
                </NavLink>
                
                <NavLink to="/register">
                    <button className="w-[239px] h-[58px] border-none">
                        Register
                    </button>
                </NavLink>
                
            </div>

            <form onSubmit={loginHandler} className="mx-auto my-8 w-[670px] gap-7 px-8 py-10 flex flex-col justify-between bg-white rounded-lg">
                <div>
                    <h1 className='text-4xl font-medium'>Hello there</h1>
                    <span className='text-base font-medium'>Sign In to get started</span>
                </div>

                {
                    validation.error && (
                        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg " role="alert">
                            <span className="font-medium">{validation.error}</span>
                        </div>
                    )
                }
    
                <div className="flex flex-col gap-7">
                    <div>
                        <span className='font-medium'>Email Address</span>
                        <input value={email} onChange={e => setEmail(e.target.value)} className='w-full h-[48px] mt-2 rounded-lg border p-2 border-abu' type="text" />
                        {
                            validation.email && validation.email.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                    <div className="login-frame7">
                        <span className='font-medium'>Password</span>
                        <input value={password} onChange={e => setPassword(e.target.value)} className='w-full h-[48px] mt-2 mb-[5px] rounded-lg border p-2 border-abu' type="text" />
                        {
                            validation.password && validation.password.map((error, index) => (
                                <span key={index} className='font-medium text-red-500'>{error}</span>
                            ))
                        }
                    </div>

                </div>

                <button type='submit' className='w-full h-[64px] bg-blue-700 text-white rounded-lg'>Login</button>
            </form>
            
        </div>
    )
}

export default Login