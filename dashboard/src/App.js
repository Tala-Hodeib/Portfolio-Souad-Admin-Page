import logo from './logo.svg';
import Login from "./Login.js";
import Menu_bar from './components/Menu_bar';
import './App.css';
import AboutAdminPage from './components/About';

function App() {
  return (
    <div className="App">
     {/*} <header className="App-header">
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
      </header>*/}
      <AboutAdminPage/>
    </div>
  );
}

export default App;
