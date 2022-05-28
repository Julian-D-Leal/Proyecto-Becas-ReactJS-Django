import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
 
class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render(){
      const {toggle, onSave} = this.props;
      return(
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Becas Universitarias</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="nombre">Nombre:</Label>
                            <Input
                            type="text"
                            name="nombre"
                            value={this.state.activeItem.nombre}
                            onChange={this.handleChange}
                            placeholder="Enter Task Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="categoria">Categoria:</Label>
                            <Input
                            type="text"
                            name="categoria"
                            value={this.state.activeItem.categoria}
                            onChange={this.handleChange}
                            placeholder="Ingrese 1 para nacional y 2 para internacional"
                            />                           
                        </FormGroup>
                        <FormGroup>
                            <Label for="porcentaje">Porcentaje:</Label>                            
                            <Input
                            type="text"
                            name="porcentaje"
                            value={this.state.activeItem.porcentaje}
                            onChange={this.handleChange}
                            />                                
                        </FormGroup>
                        <FormGroup>
                            <Label for="pais">Pais:</Label>
                            <Input
                            type="text"
                            name="pais"
                            value={this.state.activeItem.pais}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="universidad">Universidad:</Label>
                            <Input
                            type="text"
                            name="universidad"
                            value={this.state.activeItem.universidad}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="requerimientos">Requerimientos:</Label>
                            <Input
                            type="textarea"
                            name="requerimientos"
                            value={this.state.activeItem.requerimientos}
                            onChange={this.handleChange}
                            />                          
                        </FormGroup>
                        <FormGroup>
                            <Label for="vistas">vistas:</Label>
                            <Input
                            type="text"
                            name="vistas"
                            value={this.state.activeItem.vistas}
                            onChange={this.handleChange}
                            />                          
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Guardar
                    </Button>
                </ModalFooter>
            </Modal>
      );
  }
}

export default AddModal;