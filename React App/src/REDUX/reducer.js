const initialValue = {
    items: []
}

const reduce = (state = initialValue, action) => {
    switch (action.type) {
        case "ADDDATA":
            return { ...state, items: [...state.items, action.payload] }
        case "DELETEDATA":
            const newArr = state.items.filter((_, index) => index !== action.payload);
            return { ...state, items: newArr };
        case "EDITDATA":
            const editedArr = state.items.map((current, index) => index === action.payload.i ? action.payload.item : current)
            return { ...state, items: editedArr }
        default:
            return state;
    }
}

export default reduce;