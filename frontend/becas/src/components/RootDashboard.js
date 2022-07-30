import axios from 'axios';
import React ,{Component} from 'react';
import AddModal from './modalAdd'
import {Link} from 'react-router-dom';

class RootDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active:{
                nombre: "",
                categoria: "",
                porcentaje: 0,
                pais: "",
                universidad: "",
                requerimientos: "",
                vistas:0
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

    createBeca = () => {
        const item = { nombre: "",
        categoria: "",
        porcentaje: 0,
        pais: "",
        universidad: "",
        requerimientos: "",
        vistas:0};
        this.setState({ activeItem: item, modal: !this.state.modal });
      };

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
                                    <button onClick={() => this.editItem(item)} className="botoneditar ">Editar</button>
                                    <button onClick={() => this.handleDelete(item)}className="botonmio btn-primary w3-red">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal});
    };
    handleSubmit = (item) => {
        this.toggle();
        alert("save" + JSON.stringify(item));
      };
    handleSubmit = (item) => {
        this.toggle();
        if (item.id) {      
            axios
            .put(`http://localhost:8000/becas/list/${item.id}/`, item)
            .then((res) => this.refreshList());
            return alert("Accion realizada con exito");
    }
    axios 
        .post("http://localhost:8000/becas/list/", item)
        .then((res) => this.refreshList());
        alert("Accion realizada con exito");
    };
    handleDelete = (item) => {
        axios
          .delete(`http://localhost:8000/becas/list/${item.id}/`)
          .then((res) => this.refreshList());
        alert("eliminado con exito")
      };
    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    };
    render() {
        return(
            <div>   
                <h2>Lista de becas</h2>
                <Link className="botonregresar btn-primary" to="/">
                    Regresar
                </Link>
                <button className="botonañadir w3-green" onClick={this.createBeca}>
                    Añadir Beca
                </button>
                <div>
                    {this.renderBecas()}
                </div>
                {this.state.modal ? (
                <AddModal
                    activeItem={this.state.activeItem}
                    toggle={this.toggle}
                    onSave={this.handleSubmit}
                />
                ) : null}
            </div>
        )
    }
}

export default RootDashboard;