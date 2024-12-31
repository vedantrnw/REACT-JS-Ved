import React, { useEffect, useState } from 'react'
import "./App.css"

function Crud() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        pass: "",
        gender: "",
        checked: [],
        // image: "",  
    });

    const [arr, setArr] = useState(() => {
        const storeData = localStorage.getItem("data");
        return storeData ? JSON.parse(storeData) : [];
    });



    const [edit, setEdit] = useState(null);


    const handleForm = (e) => {
        e.preventDefault();
        if (edit !== null) {
            const updateArr = [...arr];
            updateArr[edit] = input;
            setArr(updateArr);
            setEdit(null);
        } else {
            setArr([...arr, input]);
        }

        setInput({
            name: "",
            email: "",
            pass: "",
            gender: "",
            checked: [],
            // image: "",  
        });
        e.target.reset();
    };


    const deleteData = (i) => {
        const updateData = arr.filter((_, index) => index !== i);
        setArr(updateData);
        localStorage.setItem("data", JSON.stringify(updateData));
    };


    const editData = (i) => {
        setEdit(i);
        setInput(arr[i]);
    };


    // const saveImage = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setInput((prevState) => ({ ...prevState, image: reader.result }));
    //         };
    //         reader.readAsDataURL(file); 
    //     }
    // };


    const handleCheckboxChange = (e) => {
        // const value = e.target.value;
        // setInput((prevState) => {
        //     const updatedChecked = prevState.checked.includes(value)
        //         ? prevState.checked.filter((item) => item !== value)
        //         : [...prevState.checked, value];
        //     return { ...prevState, checked: updatedChecked };
        // });
        const { value, checked } = e.target;
        if (checked) {
            setInput((prev) => ({ ...prev, checked: [...prev.checked, value] }));
        } else {
            setInput((prev) => ({
                ...prev,
                checked: prev.checked.filter((item) => item !== value),
            }));
        }
    };

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr]);

    const [search, Setsearch] = useState("")


    const filterdItem = arr.filter((e) => {
        return e.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                /> <br /><br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                /> <br /><br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={input.pass}
                    onChange={(e) => setInput({ ...input, pass: e.target.value })}
                /> <br /><br />


                <div>
                    <label>Gender: </label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={input.gender === "Male"}
                        onChange={(e) => setInput({ ...input, gender: e.target.value })}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={input.gender === "Female"}
                        onChange={(e) => setInput({ ...input, gender: e.target.value })}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={input.gender === "other"}
                        onChange={(e) => setInput({ ...input, gender: e.target.value })}
                    /> other
                </div>
                <br />

                {/* Checkbox input */}
                <div>
                    <label>Preferences: </label>
                    <input
                        type="checkbox"
                        value="Sports"
                        checked={input.checked.includes("Sports")}
                        onChange={handleCheckboxChange}
                    /> Sports
                    <input
                        type="checkbox"
                        value="Music"
                        checked={input.checked.includes("Music")}
                        onChange={handleCheckboxChange}
                    /> Music
                    <input
                        type="checkbox"
                        value="Travel"
                        checked={input.checked.includes("Travel")}
                        onChange={handleCheckboxChange}
                    /> Travel
                </div>
                <br />

                {/* File input for image */}
                {/* <input
                    type="file"
                    accept="image/*"
                    onChange={saveImage}
                /> */}
                <br />

                <button>{edit === null ? "Submit" : "Update"}</button>

            </form><br />

            {filterdItem.length > 0 &&
                <input
                    className='search'
                    type="text"
                    placeholder='Search Here...'
                    value={search}
                    onChange={(e) => Setsearch(e.target.value)}
                />
            }
            <br /><br />

            {filterdItem.length > 0 &&
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Preferences</th>
                            {/* <th>Image</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterdItem.map((ele, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.pass}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.checked.join(", ")}</td>
                                <td>{"no data avelable"}</td>
                                {/* <td>{ele.image && <img src={ele.image} style={{ width: "50px" }} alt="User" />}</td> */}
                                <td>
                                    <button onClick={() => editData(i)}>Edit</button>
                                    <button onClick={() => deleteData(i)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    );
}

export default Crud;
