import "./App.css";
import axios from "axios";

function App() {
  const selectAll = async () => {
    //async와 await로 비동기 지원
    alert("selectAll!");
    const result = await axios.get("/user");
    //http://localhost:4000/user인 서버에 데이터를 요청한다. 이 설정은 package.json의 proxy설정에 있음
    //요청한 데이터가 도착하면 result에 담는다.
    console.log(result);
  };
  const selectWhere = async () => {
    alert("selectWhere!");
    const result = await axios.get("/user/" + 3);
  };

  return (
    <div id="App">
      <h1>React-Express-MySQL 연결</h1>
      <button onClick={selectAll}>모두조회</button>
      <button onClick={selectWhere}>조건조회</button>
    </div>
  );
}

export default App;
