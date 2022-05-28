import React, {Component} from 'react';
import axios from 'axios'

import './cardslide.css'

class Populares extends Component{
    constructor(props){
        super(props)
        this.state = {
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

    listarPop = () => {
        function ordenarAsc(p_array_json, p_key) {
            p_array_json.sort(function (a, b) {
               return a[p_key] > b[p_key];
            });
         }

        function ordenarDesc(p_array_json, p_key) {
            ordenarAsc(p_array_json, p_key); p_array_json.reverse(); 
        }
        ordenarDesc(this.state.becas,'vistas')
    }

    render = () => {
        this.listarPop()
        const items = this.state.becas
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
                                        <button class="detalle--btn">Detalles</button>
                                    </div>
                                </section>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Populares;