
import { useEffect } from 'react';
import { Fragment, useState } from 'react'
import './App.css'
import { Title } from './component/Title';

function App() {
    const[count,setCount] =useState(0);
    const [userName, setUserName] = useState("Title Component")
    const [employee, setEmployee] = useState("Employee Object");

 useEffect(()=>{
// api
//set update
//Language Set
// dark/Light
setUserName("useeffect Name")

 },[])
    

 const onIncrementPrev =() =>
 {
  //prev is fetch latest value so it will be accurate
  setCount((prev)=>prev+1);
  setCount((prev)=>prev+1);
  setCount((prev)=>prev+1);
  setUserName("Click Name")
 };


 const onIncremenPlus =() =>
 {
  //asynchronus setcount not fetch latest value
  setCount(count+1);
  setCount(count+1);
  setCount(count+1);
 };
  return (

      <>
      {/*  */}
    <div>
     <h1>Debug {count}</h1>
     <Title titleUser={userName}    
    //  passing object
       Group={{company:{employeeName:employee}}}
       onIncrementPrev ={onIncrementPrev}/>
     <button onClick={onIncrementPrev}>Increment</button>

     <button onClick={onIncremenPlus}>Incrementasync</button>

    </div>
    <div><h1>Hai Second div</h1></div>
    </>
  )
}

export default App
