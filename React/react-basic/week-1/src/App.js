import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div style={{
        width:"400px",
        height:"180px",
        border:"1px solid lightgray",
        borderRadius:"3px",
        margin:"30px auto",
        padding:"20px"
        }}>
        <h1 style={{color:"green"}}>안녕하세요!</h1>
        <hr/>
        <div style={{
          textAlign:"left"
        }}>
          <p>이름을 입력해주세요.</p>
          <input style={{width:"100%"}}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
