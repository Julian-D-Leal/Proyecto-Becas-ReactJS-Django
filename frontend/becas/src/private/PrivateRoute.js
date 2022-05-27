import {Route, Redirect} from "react-router-dom"
import { useSelector } from "react-redux"
import { Component } from "react"


export const GPrivateRoute=({component:Component, path, ...rest})=>{
    const state=useSelector(state =>state.auth)
    return <Route path={path}
                  {...rest}
                  render={(props)=>{
                      if(state.isLoading){
                          return <h3>Loading....</h3>
                      }else if(!state.isAuthenticated &&  !state.isGuest){
                          return <Redirect to="/login/"/>
                      }else{
                          return <Component {...props}/>
                      }
                  }}/>
    
}

export const RPrivateRoute = ({component:Component, path, ...rest }) => {
    const state=useSelector((state) => state.auth)
    return <Route 
      path={path}
      {...rest}
      render ={(props)=>{
        if (state.isLoading){
               return <h2>Loading ....</h2>
        }else if(state.isAuthenticated && !state.isGuest){
            return <Component {...props}/>
        }else{    
             return <Redirect to="/root/dashboard/" />
        }
    }      
    }/>
}
