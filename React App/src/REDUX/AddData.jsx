import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteItem, editItem } from './action';

function AddData() {

  const [input, setInput] = useState({
    name: '',
    email: '',
    pass: '',
  });

  const [editIndex, setEditIndex] = useState(null)

  const dispatch = useDispatch()
  const data = useSelector((state) => state.items)

  const formhandle = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      dispatch(editItem({ i: editIndex, item: input }))
      // console.log(input.name, input.email, input.pass);
      setEditIndex(null)
    } else {
      dispatch(addData(input))
    }



    // dispatch(addData(input));
    console.log(input.name, input.email, input.pass);
    setInput({
      name: '',
      email: '',
      pass: '',
    });
    e.target.reset();
  };

  const deleteData = (i) => {
    dispatch(deleteItem(i))
  }

  const editData = (i) => {
    const itemEdit = data[i]
    setInput(itemEdit)
    setEditIndex(i)
  }
  return (
    <>
      <form onSubmit={formhandle}>
        <input
          type="text"
          placeholder="Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={input.pass}
          onChange={(e) => setInput({ ...input, pass: e.target.value })}
        />
        <br /><br />
        <button>{editIndex === null ? "Submit" : "Update"}</button>
      </form>

      {data.length > 0 && (
        <table border={1}>
          <thead >
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.pass}</td>
                <td>
                  <button onClick={() => editData(i)}>Edit</button>
                  <button onClick={() => deleteData(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default AddData