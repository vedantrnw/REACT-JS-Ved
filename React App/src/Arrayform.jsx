import React, { useState } from 'react';

function Arrayform() {
    const [input, setInput] = useState({
        name: "",
        pass: "",
        gender: "",
        checkbox: [],
    });

    const [file, setFile] = useState(null);
    const [items, setItems] = useState([]);

    const Formhandle = (e) => {
        e.preventDefault();
        const fileUrl = URL.createObjectURL(file);
        setItems([...items, { ...input, file: fileUrl }]);
        setInput({ name: "", pass: "", gender: "", checkbox: [] });
        setFile(null);
    };

    const handlefilesave = (e) => {
        const addfile = e.target.files[0];
        setFile(addfile);
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            // Add the checkbox value if it's checked
            setInput((prev) => ({ ...prev, checkbox: [...prev.checkbox, value] }));
        } else {
            // Remove the checkbox value if it's unchecked
            setInput((prev) => ({
                ...prev,
                checkbox: prev.checkbox.filter((item) => item !== value),
            }));
        }
    };

    return (
        <>
            <form onSubmit={Formhandle}>
                <input
                    type="text"
                    placeholder='Name'
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                /><br /><br />

                <input
                    type="password"
                    placeholder='Password'
                    value={input.pass}
                    onChange={(e) => setInput({ ...input, pass: e.target.value })}
                /><br /><br />

                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={input.gender === "male"}
                            onChange={(e) => setInput({ ...input, gender: e.target.value })}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={input.gender === "female"}
                            onChange={(e) => setInput({ ...input, gender: e.target.value })}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={input.gender === "other"}
                            onChange={(e) => setInput({ ...input, gender: e.target.value })}
                        />
                        Other
                    </label>
                </div><br />

                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="12th"
                            checked={input.checkbox.includes("12th")}
                            onChange={handleCheckboxChange}
                        />
                        12th
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="BCA"
                            checked={input.checkbox.includes("BCA")}
                            onChange={handleCheckboxChange}
                        />
                        BCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="MCA"
                            checked={input.checkbox.includes("MCA")}
                            onChange={handleCheckboxChange}
                        />
                        MCA
                    </label>
                </div><br />

                <input type="file" accept='image/*' onChange={handlefilesave} />
                <button type="submit">Submit</button>
            </form>

            {items.length > 0 && (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Checkbox</th>
                            <th>Files</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((ele, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.pass}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.checkbox.join(", ")}</td>
                                <td><img src={ele.file} alt="Uploaded" width="100" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Arrayform;
