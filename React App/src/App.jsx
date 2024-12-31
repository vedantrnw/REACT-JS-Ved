import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Spreading from './Spreading'
import Prop from './Prop'
import Crud from './Crud'
import Form from '../src/Form'
import Comment from './Comment'
import Arrayform from './Arrayform'
import AddData from './REDUX/AddData'
import UserApi from './APIS/UserApi'
import StoreApi from './APIS/StoreApi'
import DogAPI from './APIS/DogAPI'
import Apiaxios from './APIS/Apiaxios'
import FireStore from './FireBase/FireStore'
import RealTime from './FireBase/RealTime'

function App() {


  {/* ================Props=================== */ }

  const [sum, setSum] = useState()
  const Div = () => {
    let a = 5, b = 5, ans;
    ans = a + b;
    setSum(ans);
    console.log(ans);
  }



  const student = {
    name: "Div",
    age: 19,
    city: "Ahmedabad"
  }

  const arr = [1, "Div", 2, "om"]


  {/* ==============counter-using Prop================== */ }

  const [val, setVal] = useState(0)
  const func = () => {

    const sum = val + 1
    setVal(sum)

    console.log(val);
  }

  return (
    <>
      {/* PROMP
    <br />
     <Prop 
           newans={sum}
           btn={Div}
          // ================== counter=========
          func = {func}
          props = {val}
          array={arr}
          studentdata={student}
          /> */}
      {/* <Counter /> */}
      {/* <Spreading /> */}
      {/* <Crud /> */}
      {/* <Form /> */}
      {/* <Arrayform /> */}
      {/* <Comment /> */}
      {/* <AddData /> */}
      {/* <UserApi /> */}
      {/* <StoreApi /> */}
      {/* <DogAPI /> */}
      {/* <Apiaxios /> */}
      <RealTime />
      {/* <FireStore /> */}

    </>
  )
}

export default App
