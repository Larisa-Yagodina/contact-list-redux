import "bootstrap/dist/css/bootstrap.css"
import TableWrapper from "./TableWrapper";
import Modal from "./ModalWindow";
import {useState} from "react";
import AddNewContact from "./AddNewContact";
import {connect} from "react-redux";

function App(props) {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    };

    return (
        <div className="container">
            <h1>Contact List</h1>
            <AddNewContact/>
            <TableWrapper/>
            {props.isOpen && <Modal/>}
        </div>
    );
}

const mapStateToProps = state => ({
    isOpen: state.modalWindow.isOpen,
})

export default connect(mapStateToProps, null)(App);
