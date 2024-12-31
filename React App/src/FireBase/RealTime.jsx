import React from 'react'
import { getDatabase, ref, remove, set, update } from "firebase/database"
import { useState } from 'react'
import { app } from './data'

const db = getDatabase(app)

function RealTime() {

    const [input, setInput] = useState({
        name: "",
        password: ""
    })

    const [arr, setArr] = useState([])

    const HandleForm = (e) => {
        e.preventDefault();
        setArr([...arr, input])
        setInput({
            name: "",
            password: ""
        })
    }

    const AddData = () => {
        arr.map((ele, index) => {
            set(ref(db, `main/data/${index}`), {
                name: ele.name,
                password: ele.password
            })

            console.log("Data Added");
        })


    }

    const DeleteData = () => {
        remove(ref(db, "main/data"))
            .then(() => console.log('Data Deleted'))
            .catch((error) => console.error('Error deleting data:', error));
    };

    const EditData = () => {
        update(ref(db, "main/data"), {
            name: "",
            password: ""
        }).then(() => console.log("Updated Data"))
    }
    return (
        <>
            <h1>FireBase</h1>
            <form onSubmit={HandleForm}>
                <input type="text" placeholder='Enter Name' value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} /><br /><br />
                <input type="password" placeholder='Enter Password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} /><br /><br />
                <button onClick={AddData}>Add Data</button>
                <button onClick={DeleteData}>Delete Data</button>
                <button onClick={EditData}>Edit Data</button>
            </form>
        </>

    )
}

export default RealTime;