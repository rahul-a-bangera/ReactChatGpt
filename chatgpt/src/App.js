// import logo from "./logo.svg";
import "./App.css";
import { handleChange } from './ChatGPT.js';
import { handleSubmit } from './ChatGPT.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">Chat Bot For issues</header>
      <div className="rect">
        <div className="ResDisp"></div>
        <div className="InpTxt">
          <input
            className="TxtBox"
            type="Text"
            keydown=""
            placeholder="Enter you Query here"
          ></input>
        </div>
      </div>
    </div>
  );
}

function InputEnter(event) {
  var txt = event.target.value;
  var KeyCode = event.keycode;
  if (KeyCode === 13) {
    // Do something when the Enter key is pressed.
    handleChange(event)
    handleSubmit(event)
  }
}

export default App;
