import React, { Component } from "react"
import './tirar.css'

import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
 
class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  render() {
    const {toggle} = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Detalles de la Beca </ModalHeader>
        <ModalBody>
        <ul className="list-group">
                            <li className="list-group-item">
                                Beca ofertada: 
                                <span className="Tirar">{this.state.activeItem.nombre}</span>
                            </li> 
                            <li className="list-group-item">
                                Categoria: 
                                <span className="Tirar">{this.state.activeItem.categoria}</span>
                            </li> 
                            <li className="list-group-item">
                                Porcentaje cubierto:
                                <span className="Tirar">{this.state.activeItem.porcentaje}%</span>
                            </li> 
                            <li className="list-group-item">
                                País en donde se ofrece:
                                <span className="Tirar">{this.state.activeItem.pais}</span>
                            </li> 
                            <li className="list-group-item">
                                Universidad ofertante:
                                <span className="Tirar">{this.state.activeItem.universidad}</span>
                            </li> 
                            <li className="list-group-item">
                                Requisitos para ser admitido:
                                <span className="Tirar">{this.state.activeItem.requerimientos}</span>
                            </li> 
                        </ul>
        </ModalBody>
      </Modal>
    );
  }
}
export default CustomModal