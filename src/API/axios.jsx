import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const getProducts = async(search,category,brand,color) => {
    const response = await api.get(`products/filter?search=${search}&category=${category}&brand=${brand}&color=${color}`)
    return response.data
}

export const getPopularProducts = async() => {
    const response = await api.get(`products/index`)
    return response.data
}

export const getDetailProduct = async(id) => {
    const response = await api.get(`products/detail?id=${id}`)
    return response.data
}

export const registration = async(data) => {
    return await api.post(`auth/register`, data)
}

export const logOut = async() => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await api.post(`auth/logout`)
    return response.data
}

export const addToCart = async(data) => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return await api.post(`user/addCart`, data)
}

export const seeCart = async() => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return await api.post(`user/cart`)
}

export const descreaseCart = async(data) => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return await api.post(`user/decreaseCart`, data)
}

export const deleteCart = async(data) => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return await api.post(`user/deleteCart`, data)
}

export const checkOut = async(data) => {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return await api.post(`user/checkout`, data)
}
