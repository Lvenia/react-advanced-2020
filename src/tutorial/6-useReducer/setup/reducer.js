export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                list: [...state.list, action.payload],
                showModal: true,
                modalMessage: "Item successfully added"
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                showModal: true,
                modalMessage: "Item successfully removed"
            }
        case "MISSING_ITEM":
            return {
                ...state,
                showModal: true,
                modalMessage: "Please provide item"
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                showModal: false,
            }
        default:
            throw new Error("Error form reducer")
    }
};