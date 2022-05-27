import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../actions/auth"  
import ListBecas from '../components/becas/ListBecas'


function Index() {   
  const state=useSelector(state => state.auth)
      const dispatch=useDispatch()
      const authLink=(
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
               <li className='nav-item mr-2'>
                    <button onClick={()=>dispatch(logout())} className='nav-link btn btn-danger'>Logout</button>
               </li>
               <span className="navbar-text ml-4">
                    <strong>{state.user ? `welcome ${state.user.username}` : ''}</strong>
               </span>
           </ul>
      )
      const publicLink = (
        <div className="dropdown">
                  <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      INGRESAR
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link  to="/guest/login/" className="dropdown-item">Iniciar Sesion</Link></li>
                      <li><Link to="/guest/register/" className="dropdown-item">Registrarse</Link></li>
                    </ul>
                  </div>
      )  
  return(
    <Fragment>
      <div>
          <nav className="navbar navbar-dark bg-primary" >
          <div className="container-fluid" >
            <Link className="navbar-brand" to="/">Wombat Becas</Link>
            {state.isAuthenticated ? authLink : publicLink}
          </div>
        </nav>
      </div>
      <ListBecas/>
    </Fragment>
  )
}

export default Index;