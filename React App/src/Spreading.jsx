import React, { useState } from 'react'

function Spreading() {

  const [name,setName] = useState("Divyang")
  const change = () => {
    setName("om")
  }


  //  ==================obj========================
   const [obj,setObj] = useState({name : "Div",age :19,course : "FullStack"})
   const changeObj = () => {
     setObj({...obj,name : "karan"})
   }


  // ==================== ARR ============================
  const [arr,setArr] = useState([1,"Div",2,"om"])
  const changearr = () => {
    setArr([...arr,11,"karan"])
  }

 
 

  return (
    <>
<h1>Spriding Operator</h1> <br />
=========================== <br />

    <h2>{name}</h2>
    <button onClick={change}>Change Name</button>
    <br /><br />


    {/* ====================obj==================== */}
    =========================== <br />
    Change only Name in obj <br />
    <h2>name:{obj.name} <br />Age: {obj.age} <br />Course: {obj.course}</h2>
    <button onClick={changeObj}>Change Obj</button>
    <br /><br />

    {/* =================ARR================= */}
    =========================== <br />
    Add new data in Array <br />
    <h2>{arr.map((ele,i)=>(
      <li key={i}>{ele}</li>
    ))}</h2>
    <button onClick={changearr}>Change Arr</button>
   
    </>
  )
}

export default Spreading;