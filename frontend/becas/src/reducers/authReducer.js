import {
    GUEST_USER_LOADED,
    GUEST_USER_FAILED,  
    ROOT_USER_LOADED,
    ROOT_USER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_GUSER_SUCCESS,
    REGISTER_GUSER_FAILED,
    REGISTER_RUSER_SUCCESS,
    REGISTER_RUSER_FAILED } from "../actions/types"

const initialState = {
    token: '',
    isAuthenticated: false,
    isGuest: null,
    isLoading: false,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_GUSER_SUCCESS:
        case REGISTER_RUSER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,   
                ...action.payload,
                isAuthenticated: true,
                isGuest: action.payload.user.is_guest,
                isLoading: false
            }
        case ROOT_USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isGuest: false,
                user: action.payload.user
            }
        case GUEST_USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isGuest: true,
                user: action.payload.user
            }          
        case REGISTER_GUSER_FAILED:
        case REGISTER_RUSER_FAILED:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,   
                token: null,
                isAuthenticated: false,
                isGuest: false,
                isLoading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated:true,
                isLoading:false,
                isGuest:action.payload.is_guest,
            }    
        case GUEST_USER_FAILED:
        case ROOT_USER_FAILED:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return{
                ...initialState
            }
        default:
            return state;
    }
}