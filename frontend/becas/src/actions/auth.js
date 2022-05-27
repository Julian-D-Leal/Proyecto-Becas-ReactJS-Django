import axios from "axios";

import {
    GUEST_USER_LOADED,
    GUEST_USER_FAILED,  
    ROOT_USER_LOADED,
    ROOT_USER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_GUSER_SUCCESS,
    REGISTER_GUSER_FAILED,
    REGISTER_RUSER_SUCCESS,
    REGISTER_RUSER_FAILED } from "./types"


    export const create_guestuser=({username, email,password, password2})=>(dispatch)=>{
        const config={
            headers:{
                'Content-Type':'application/json',
            }
        }
        const body=JSON.stringify({username, email, password, password2})
    
        axios.post('http://127.0.0.1:8000/becas/signup/guest', body, config)
        .then(res =>{
            dispatch({
                type:REGISTER_GUSER_SUCCESS,
                payload:res.data
            })
            console.log(res.data)
        }).catch(err =>{
            dispatch({
                type:REGISTER_GUSER_FAILED
            })
            console.log(err.response.data)
        })
    
        
    }

export const login = ({username, password}) =>(dispatch)=>{
    let state={
        is_admin: false
    }
    const config={
        headers:{
            'content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username,password})

    axios.post('http://127.0.0.1:8000/becas/login/', body, config)
    .then(response =>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
        console.log(response.data)
    }).catch(err =>{
        dispatch({
            type: LOGIN_FAILED,

        })
        console.log(err.response.data)
    })
}    

export const getRootUser = () =>(dispatch, getState) =>{
    const token = getState().auth.token
    const is_guest = getState().auth.isGuest
    const config = {
        headers:{
            'Content-Type': 'application-json'
        }
    }

    if(token&&!is_guest){
        config.headers['Authorization']='Token ${token}'
    }
    axios.get('http://127.0.0.1:8000/becas/root/dashboard/',config)
    .then(res=>{
        dispatch({
            type:ROOT_USER_LOADED,
            payload:res.data
        })
    }).catch(err =>{
        dispatch({
            type:ROOT_USER_FAILED
        })
    })
} 

export const getGuestUser = () =>(dispatch, getState) =>{
    const token = getState().auth.token
    const is_guest = getState().auth.isGuest
    const config = {
        headers:{
            'Content-Type': 'application-json'
        }
    }

    if(token && is_guest){
        config.headers['Authorization']='Token ${token}'
    }
    axios.get('http://127.0.0.1:8000/becas/guest/dashboard/',config)
    .then(res=>{
        dispatch({
            type:GUEST_USER_LOADED,
            payload:res.data
        })
    }).catch(err =>{
        dispatch({
            type:GUEST_USER_FAILED
        })
    })
} 


export const logout=()=>(dispatch, getState)=>{
    const token=getState().auth.token
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(token){
        config.headers['Authorization']= `Token ${token}`
    }
    axios.post('http://127.0.0.1:8000/becas/logout/', null, config)
    .then(res =>{
        dispatch({
            type:LOGOUT_SUCCESS
        })
    }).catch(err =>{
        console.log(err.response.data)
    })
}