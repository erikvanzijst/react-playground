import './App.css';
import {useState} from "react";
import Header from "./Header";

function MyButton({count, onClick}) {
  return (
      <button onClick={onClick}>Clicked {count} times</button>
  )
}

function App() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <Header/>
            <div>
                <MyButton count={count} onClick={handleClick}/>
            </div>
            <div>
                <MyButton count={count} onClick={handleClick}/>
            </div>
        </div>
    );
}

export default App;
