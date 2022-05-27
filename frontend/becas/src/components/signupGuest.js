import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { create_guestuser } from '../actions/auth'


const Guestsignup = ({create_guestuser, isAuthenticated, isGuest}) => {

    const [guest, setguest]= useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleChange = (e) => { setguest({
        ...guest,
        [e.target.name]: e.target.value
    })}

    const {username, email, password,password2} = guest;
    const handleSubmit = (e) => {
        e.preventDefault();
        const newGuest ={
            username,
            email,
            password,
            password2
        }
        create_guestuser(newGuest)
    }

    if(isAuthenticated && isGuest) {
        return <Redirect to="/"/>
    }
    return (
        <div className="container">
            <h2>Registrarse</h2>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="form-group mb-3">
                            <label>
                                Nombre de Usuario
                            </label>
                            <input type="text" className="form-control" name="username" value={username} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className="form-group mb-3">
                            <label>
                                Email
                            </label>
                            <input type="text" className="form-control" name="email" value={email} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className="form-group mb-3">
                            <label>
                                Contraseña
                            </label>
                            <input type="password" className="form-control" name="password" value={password} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className="form-group mb-3">
                            <label>
                                Confirme su contraseña
                            </label>
                            <input type="password" className="form-control" name="password2" value={password2} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <span>
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                            <Link to="/" className="btn btn-primary">Regresar</Link>
                        </span>
                    </form>
                </div>
            </div>

        </div>
    )
}

Guestsignup.propTypes = {
    create_guestuser:PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isGuest: PropTypes.bool
}


const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isGuest:state.auth.isGuest
})

export default connect(mapStateToProps, {create_guestuser})(Guestsignup);