import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>변경된 제목</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
