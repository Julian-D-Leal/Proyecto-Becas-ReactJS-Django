import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import {connect} from "react-redux";
import {login} from "../actions/auth";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";


function Login({login, isAuthenticated, isGuest, prueba}) {
    
    const [user, setUser]=useState({
        username:"",
        password:""
    })

    const {username, password}=user

    const loginChange=(e)=>setUser({...user, [e.target.name]: e.target.value});

    const handleLoginSubmit=(e)=>{
         e.preventDefault();
         login({username, password})
     }

    if(isAuthenticated && !prueba){
        return <Redirect to="/" />
    }else if(isAuthenticated && prueba){
        return <Redirect to="/root/dashboard/" />
    }else{
        return(
            <div className="container">
                <h2>Inicio de sesión</h2>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form onSubmit={e=>handleLoginSubmit(e)}>
                            <div className="form-group mb-3">
                                    <label>
                                        Usuario
                                    </label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={e=>loginChange(e)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>
                                        Contraseña
                                    </label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={e=>loginChange(e)}  />
                                </div>
                                <span>
                                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                <Link to="/" className="btn btn-primary">Regresar</Link>
                                </span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }    
}

Login.propTypes={
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isGuest:PropTypes.bool,
    prueba: PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isGuest:state.auth.isGuest,
    prueba: state.auth.is_admin
})

export default connect(mapStateToProps, {login})(Login);