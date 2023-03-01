// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
// import Contador from './components/contador/Contador';

function App() {
  // const [boolean, setBoolean] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Footer />
      {/* <header className="App-header">
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
        <button onClick={() => setBoolean(!boolean)}>Cambiar Boolean</button>
        {boolean ? <Contador data={boolean}/> : 'no hay componente'}
      </header> */}
    </div>
  );
}

export default App;
