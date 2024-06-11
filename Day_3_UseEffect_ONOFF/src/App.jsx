import { useEffect, useState } from "react";

import "./App.css";
import { fetchUsers } from "./api";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);
  const [userName, setuserName] = useState("Debug Media");
  const [userList, setuserList] = useState([]);
  const [togle, setTogle] = useState(false);

  // useEffect(() => {

  //   console.log("inside useEffect only once - open connection fetch data");
  //   console.log(1);
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => setuserList(json))

  //   return () => {
  //     console.log("close connection then");
  //   };
  // } ,[]);
  //***************************** */

  //1 .create function inside useeffect.
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/"
  //     );
  //     const json = await response.json();
  //     setuserList(json);
  //   };

  //   fetchUsers();

  //   console.log("Outside useEffect work on every render");
  // }, [count]);

  //*************************** */
  //2.create function outside useEffect
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const json = await response.json();
    setuserList(json);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  ///------------------------------------

  //3 IIFE self invoking function

  // useEffect(() => {
  //   //fetchUsers function will call from another paage
  //   (async () => {
  //     const response = await fetchUsers();
  //     setuserList(response);
  //   })();
  // }, []);
  console.log(userList, "===IIFE userList");

  //------------------------------------

  return (
    <>
      <div className="App">
        {count > 2 ? (
          <Title userName={userName} />
        ) : (
          <Title userName="No Name" />
        )}
        {count > 3 && <Title userName={userName} />}
        {count > 4 && <Title userName={userName} />}
        <h1>{togle ? "ON" :"OFF"}</h1>
          
        <button onClick={() => setTogle((prev) => !prev)}> Togle</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {userList?.map((data, index) => {
            return (
              <li key={data?.id} align="left">
                {index + 1}
                {"."}
                {data?.title}{" "}
              </li>
            );
          })}{" "}
        </ul>
      </div>
    </>
  );
}

export default App;
