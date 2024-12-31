// ============== MULTIPUL STATE ===========

{/* import React, { useState } from 'react'

function Form() {

    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [show,setShow] = useState(null);

  const Formvalidation = (e) => {
    e.preventDefault();
    console.log(name, pass);
    // setName("");
    // setPass("");
    setShow(true)
    
  }

  return (
    <>
    <form onSubmit={Formvalidation}>
      <input type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)} />
      <br /><br />
      <input type="password" placeholder='Enter password' value={pass} onChange={(e)=>setPass(e.target.value)} />
      <br /><br />
      <button type='submit'>Submit</button>
    </form>

    {show === null ? "":
    <>
    <h2>Name : {name}</h2>
    <h2>pass : {pass}</h2>
    </>
    }

    </>
  )
}

export default Form
*/}


// ============= SINGLE STATE ===============
import React, { useState } from 'react';

function Form() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    pass: '',
  });

  const [arr, setArr] = useState([]);

  const formhandle = (e) => {
    e.preventDefault();
    setArr([...arr, input]);
    console.log(input.name, input.email, input.pass);
    setInput({
      name: '',
      email: '',
      pass: '',
    });
    e.target.reset();
  };

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
        <button>Submit</button>
      </form>

      {arr.length > 0 && (
        <table border={1}>
          <thead >
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.pass}</td>
                <td>
                  {/* <button onClick={() => editData(i)}>Edit</button>
                  <button onClick={() => deleteData(i)}>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Form;
