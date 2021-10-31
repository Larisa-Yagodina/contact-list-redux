const initialState = {
    contactList: [
        {id: 1, name: "Alice Smith", email: "alice@mail.ru", address: "New York, 5 Ave, 44-55", phoneNumber: "+1555666777"},
        {id: 2, name: "Bill Brown ", email: "bill@mail.ru", address: "Los Angeles, Los Feliz blvd, 443", phoneNumber: "+1333222777"},
        {id: 3, name: "Steve McGregor", email: "steve@mail.ru", address: "Palm Springs, W Camino Sur, 20", phoneNumber: "+1888777444"},
    ],
    modalWindow:
        {
            action: null,
            data: null,
            isOpen: false,
            title: null,
        }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_CARDS':
            return {
                ...state
            }

        case "OPEN_MODAL":
            return {
                ...state, modalWindow: {...state.modalWindow,
                    isOpen: true,
                    action: action.payload.action,
                    data: action.payload.data,
                    title: action.payload.title,
                }
            }

        case "CLOSE_MODAL":
            return {
                ...state, modalWindow: {...state.modalWindow,
                    isOpen: false,
                    action: null,
                    id: null,
                    title: null,
                }
            }

        case "DELETE_CONTACT":
            const newContacts = state.contactList.filter(el => el.id !== state.modalWindow.data.id)
            return {
                ...state, contactList: [...newContacts],
            }

        case "ADD_NEW_CONTACT":
            return {
                ...state, contactList: [...state.contactList, action.payload],
            }


        case "UPDATE_CONTACT":
            const newContacts2 = state.contactList.map(el => el.id === state.modalWindow.data.id ? {...action.payload} : el);
            return {
                ...state, contactList: newContacts2,
            }

        default:
            return state;
    }
}

export default reducer;