import React,{Component} from 'react'
import Modal from '../modalDetalle/Detalles'
import axios from 'axios'
import './card.css'

class ListBecas extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeItem:{
                Nombre: "",
                Categoria: "",
                Porcentaje: 0,
                Pais: "",
                Universidad: "",
                Requerimientos: ""
            },
            becas:[],
            viewInternationals: 1
        }
    }

    componentDidMount(){
        this.refreshList()
    }
    
    detallarItem= (item) => {
        this.setState ({activeItem:item,modal:!this.state.modal})
    }

    refreshList = () => {
        axios
        .get("http://localhost:8000/becas/list/")
        .then(res => this.setState({becas:res.data}))
        .catch(err => console.log(err))
    }

    toggle = () =>{
        this.setState({modal: !this.state.modal});
    }

    displayInternationals = status => {
        if(status){
            return this.setState({viewInternationals:2});
        }
        return this.setState({viewInternationals:1});
    }



    render = () => {
        const {viewInternationals} = this.state
        const items = this.state.becas.filter(
            (item) => item.categoria === viewInternationals
        )
        return (
            <div>
                <button onClick={() => this.displayInternationals(false)}
                className="btn btn-primary">
                    BECAS NACIONALES
                </button>
                <button onClick={() => this.displayInternationals(true)}
                className="btn btn-primary">
                    BECAS INTERNACIONALES
                </button>
                
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
                                    <button className="botonmio" onClick={() => this.detallarItem(item)}>Detalles</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                ))}
                {this.state.modal ? (
                    <Modal
                    activeItem = {this.state.activeItem}
                    toggle= {this.toggle}
                    />
                ) : null }
            </div>)
    } 
}

export default ListBecas