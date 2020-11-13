import logo from './logo.svg';
import './App.css';

// these three imports take those files and basically insert them 
// in the return in the function. This allows for a more loosely
// structured application
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    
    // className is React equivalent of class for referring to a div
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
