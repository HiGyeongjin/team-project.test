import React from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login";
//axios모듈에서 axios함수를 불러온다. ($.ajax랑 거의 같다 보면된다.)
//axios를 쓰는 목적은 서버에 데이터를 요청할 때 비동기적으로 요청하려고
//함수형 컴포넌트

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const selectAll = async () => {
    //화살표함수(arrow-function)
    alert("selectAll!");
    const result = await axios.get("/user");
    console.log(result);
    // http://localhost:4000/movies
  };
  /*
  const selectWhere=async()=>{
    alert("selectWhere!")
    axios.get('/movie/'+3)
  }
*/
  //여기서부터
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch data from your backend
    axios
      .get("/api/data")
      .then((response) => {
        // Log the data in the console
        console.log("Data received from the server:", response.data);
        // Update the state with the received data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //여기까지

  return (
    <div id="App">
      <h1>React-Express-MySQL 연결</h1>
      <button onClick={selectAll}>모두조회</button>
      <Login />
    </div>
  );
}

export default App;
