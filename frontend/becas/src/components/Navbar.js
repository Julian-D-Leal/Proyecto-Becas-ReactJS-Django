import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../actions/auth"  

export default function Navbar() {
    const state=useSelector(state => {
        console.log(state);
        return state.auth
      })
    const dispatch=useDispatch()
    const authLink=(
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text ml-4">
            <strong>{state.isAuthenticated && `Bienvenido ${state.user.username}`}</strong>
        </span>
        <button
        onClick={()=>dispatch(logout())} 
        className='nav-link btn btn-danger float-right'>
        Cerrar Sesion
        </button>
    </ul>
    );
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

  return (
    <div>
        <nav className="navbar navbar-dark bg-primary" >
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/">Wombat Becas</Link>
                {state.isAuthenticated ? authLink : publicLink}
            </div>
        </nav>
    </div>
  )
}
