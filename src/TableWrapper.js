import React from 'react';
import {Table} from "reactstrap";
import {connect} from "react-redux";
import TableRow from "./TableRow";

const TableWrapper = (props) => {

    let serialNumber = 0;

    return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone number</th>
                    <th>E-mail</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.contactList.map(el => <TableRow key={el.id} serialNumber={++serialNumber}  contact={el} />)}

                </tbody>
            </Table>
    );
};

const mapStateToProps = state => ({
    contactList: state.contactList,
})

export default connect(mapStateToProps, null)(TableWrapper);