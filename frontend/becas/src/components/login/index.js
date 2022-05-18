import React,{Component} from 'react';

class Index extends Component {
    render(){
        return(
          <div>
              <nav class="navbar navbar-dark bg-primary" >
              <div class="container-fluid" >
                <a class="navbar-brand" href="">Wombat Becas</a>
                <div class="dropdown">
                  <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    INGRESAR
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item">Iniciar Sesion</a></li>
                    <li><a class="dropdown-item" href="#">Registrarse</a></li>
                  </ul>
                </div>
                
              </div>
            </nav>
          </div>
        )
    }
}

export default Index;