import React from 'react';
import {Button} from "reactstrap";
import {connect} from "react-redux";

const AddNewContact = (props) => {

    return (
        <Button onClick={props.toggle} style={{float: 'right'}} outline color="secondary">
            New contact
        </Button>
    );
};

const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch({
        type: "OPEN_MODAL",
        payload: {title: "Add new contact", action: "ADD_NEW_CONTACT", data: null}
    })
})

export default connect(null, mapDispatchToProps)(AddNewContact);