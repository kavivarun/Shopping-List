import React, {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import { addItem } from '../actions/itemActions'
import uuid from 'react-uuid'

class ItemModal extends Component{
    state= {
        modal : false,
        name : ''
    };

    toggle = () =>{
        this.setState({
            modal : !this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const newItem ={
            id : uuid(),
            name: this.state.name
        }
        //calls addItem
        this.props.addItem(newItem);
        //close modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button 
                    color="dark" 
                    style={{marginBottom : '2rem', marginLeft :'.75rem'}}
                    onClick= {this.toggle}
                >
                   Add Item 
                </Button>
                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle = {this.toggle}>
                        Add to Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit = {this.onSubmit }>
                            <FormGroup>
                                <Label for= 'item'>Item</Label>
                                <Input
                                    type = 'text'
                                    name='name'
                                    id = 'item'
                                    placeholder= 'Add Item'
                                    onChange={this.onChange}
                                >
                                </Input>
                            </FormGroup>
                            <Button color='dark' marginBottom='2 rem' block>
                                Add Item
                            </Button>
                        </form>
                    </ModalBody>    
                </Modal>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps,{addItem})(ItemModal);