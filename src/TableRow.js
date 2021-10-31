import React from 'react';
import { Button } from 'reactstrap';
import {connect} from "react-redux";


const TableRow = (props) => {

    return (
            <tr>
                <td>{props.serialNumber}</td>
                <td>{props.contact.name}</td>
                <td>{props.contact.phoneNumber}</td>
                <td>{props.contact.email}</td>
                <td>{props.contact.address}</td>
                <td>
                    <Button onClick={() =>
                        props.toggle(props.contact, "OPEN_MODAL", "Update this contact", "UPDATE_CONTACT" )}
                            color="link">✏️</Button>
                    <Button onClick={() =>
                        props.toggle(props.contact, "OPEN_MODAL", "Delete this contact?", "DELETE_CONTACT")}
                            color="link">🗑</Button>
                </td>
            </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    toggle: (contact, type, title, action) => dispatch({
        type,
        payload: {title, action, data: contact}
    })
})

export default connect(null, mapDispatchToProps)(TableRow);