//function for useeffect as api call

import axios from "axios";

axios


// export const fetchUsers = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const json = await response.json();
//     return json;
// };


export const fetchUsers = async() => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos/");

    return response.data;
};


//export default fetchUsers