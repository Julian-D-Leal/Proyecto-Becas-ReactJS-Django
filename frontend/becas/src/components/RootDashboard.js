import axios from 'axios';
import React ,{Component} from 'react';

class RootDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active:{
                Nombre: "",
                Categoria: "",
                Porcentaje: 0,
                Pais: "",
                Universidad: "",
                Requerimientos: ""
            },
            becas:[]
        }
    }

    componentDidMount(){
        this.refreshList()
    }

    refreshList = () => {
        axios
        .get("http://localhost:8000/becas/list/")
        .then(res => this.setState({becas:res.data}))
        .catch(err => console.log(err))
    }

    renderBecas = () => {
        const items = this.state.becas
        return (
            <div> 
                {items.map((item)=>(
                    <div key={item.id}>
                        <div className="courses-container">
	                        <div className="course">
	                        	<div className="course-preview">
                                    <h6>Beca</h6>
                                    <h2>{item.nombre}</h2>
                                </div>
                                <div className="course-info">
                                    <h6>{item.pais}</h6>
                                    <h2>{item.universidad}</h2>
                                    <di>
                                        
                                    </di>
                                    <button class="botoneditar ">Editar</button>
                                    <button class="botonmio btn-primary w3-red">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return(
            <div>   
                <h2>Lista de becas</h2>
                <button className="botonañadir w3-green">
                    Añadir Beca
                </button>
                <div>
                    {this.renderBecas()}
                </div>
            </div>
        )
    }
}

export default RootDashboard;