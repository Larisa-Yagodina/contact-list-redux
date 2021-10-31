import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import {connect} from "react-redux";



function ModalWindow(props) {

    const {isOpen, title, action} = props.modal;
    const contact = props.modal.data;


    const [name, setName] = useState(action === "UPDATE_CONTACT" ?  contact.name : "");
    const [phoneNumber, setPhoneNumber] = useState(action === "UPDATE_CONTACT" ? contact.phoneNumber : "");
    const [address, setAddress] = useState(action === "UPDATE_CONTACT" ? contact.address : "");
    const [email, setEmail] = useState(action === "UPDATE_CONTACT" ? contact.email : "");

    const submitButtonHandler = () => {
       let data = null;
       if (action === "ADD_NEW_CONTACT" || action ===  "UPDATE_CONTACT"){
           data = {
               id: action === "ADD_NEW_CONTACT" ? Math.random() : contact.id,
               name,
               email,
               address,
               phoneNumber}
           ;
       }
       props.submit(action, data);
       props.closeModal();
    }


    return (
        <div>
            <Modal isOpen={isOpen} toggle={props.closeModal} >
                <ModalHeader toggle={props.closeModal}>{title}</ModalHeader>
                <ModalBody>
                    {action === "DELETE_CONTACT" && <p> {props.modal.data.name} </p>}

                    {action !== "DELETE_CONTACT" && <p>
                        <Input
                            value={name} onChange={e => setName(e.target.value)}
                            type="text" placeholder="name" /><br/>
                        <Input
                            value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                            type="text" placeholder="phone number" /><br/>
                        <Input
                            value={email} onChange={e => setEmail(e.target.value)}
                            type="text" placeholder="e-mail" /><br/>
                        <Input
                            value={address} onChange={e => setAddress(e.target.value)}
                            type="text" placeholder="address" />
                    </p>}

                </ModalBody>
                <ModalFooter>
                    <Button disabled={action === "DELETE_CONTACT" ? false : (name === "" || phoneNumber === "")} color="primary" onClick={submitButtonHandler}>Submit</Button>{' '}
                    <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};


const mapStateToProps = state => ({
    modal: state.modalWindow,
})


const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch({type: "CLOSE_MODAL"}),
    submit: (actionType, data) => dispatch({type: actionType, payload: data})
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);