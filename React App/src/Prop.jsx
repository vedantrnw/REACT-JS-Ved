import React, { useState } from 'react'

function Prop(Prop) {


  
  return (
    <>
    ================================== <br />
    Sum Using Promp <br />
      <button onClick={Prop.btn}>sum</button>
      <h1>{Prop.newans}</h1>

      ==================================<br />
      Counter USing Promp <br />
    
   <button onClick={Prop.func}>click me</button>
   <h2>{Prop.props}</h2>

   ==================================<br />
      Student Data Using promp <br />

   <h1>array:{Prop.array.join(",")}</h1>
   <h1>name:{Prop.studentdata.name}</h1>
   <h1>age:{Prop.studentdata.age}</h1>
   <h1>city:{Prop.studentdata.city}</h1>
    </>
  )
}

export default Prop;