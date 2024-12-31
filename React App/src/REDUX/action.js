const addData = (item) => {
    return {
        type: "ADDDATA",
        payload: item,
    }
};

const deleteItem = (i) => {
    return {
        type: "DELETEDATA",
        payload: i,
    }

}

const editItem = ({ i, item }) => {
    return {
        type: "EDITDATA",
        payload: { i, item },
    }

}

export { addData, deleteItem, editItem }