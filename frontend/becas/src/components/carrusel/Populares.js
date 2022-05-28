import React, {Component} from 'react';
import axios from 'axios'
import Modal from '../modalDetalle/Detalles'
import './cardslide.css'

class Populares extends Component{
    constructor(props){
        super(props)
        this.state = {
            becas:[]
        }
    }

    detallarItem= (item) => {
        this.setState ({activeItem:item,modal:!this.state.modal})
    }

    componentDidMount(){
        this.refreshList()
    }

    toggle = () =>{
        this.setState({modal: !this.state.modal});
    }

    refreshList = () => {
        axios
        .get("http://localhost:8000/becas/list/")
        .then(res => this.setState({becas:res.data}))
        .catch(err => console.log(err))
    }

    /*
    listarPop = (data, key, orden) => {
        return data.sort(function (a, b) {
            var x = a[key],
            y = b[key];
    
            if (orden === 'asc') {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
    
            if (orden === 'desc') {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });
    }*/

    render = () => {
        const bec = this.state.becas;
        var orden = bec.sort(function (a, b) {
            var x = a['vistas'],
            y = b['vistas'];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
        //var orden = listarPop(this.state.becas,'vistas','des')
        const items = orden
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" background="#01e37f">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div>
                        {items.slice(0,3).map((item)=>(
                            <div key={item.id}>        
                                <div class="carousel-item active">
                                <section class="product">
                                    <div class="product__info">
                                        <div class="title">
                                            <h1>Becas populares</h1>
                                            <div class="descripcion">
                                                <h2>{item.nombre}</h2>
                                            </div>
                                        </div>
                                        <div class="descripcion">
                                            <h2>{item.universidad}</h2>
                                        </div>
                                        <div class="descripcion">
                                            <h2>{item.pais}</h2>
                                        </div>
                                        <button class="detalle--btn" onClick={() => this.detallarItem(item)}>Detalles</button>
                                    </div>
                                </section>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {this.state.modal ? (
                    <Modal
                    activeItem = {this.state.activeItem}
                    toggle= {this.toggle}
                    />
                ) : null }
            </div>
        )
    }
}

export default Populares;