
import React from 'react';
import './App.css';
import ReactJSX, {ReactNoJSX} from './components/ReactJSX';
import CompAndProps  from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <ReactNoJSX />

        <div className="Components">
          <CompAndProps bgColor="#00ff00"/>
          <form action="">
            <input type="text" />
            <button> Click Coba</button>
            <TextInput border="red" placeholder="Nama"/>
            <Button background="blue">Kirim</Button>
          </form>
          </div>
       
      </header>
    </div>
  );
}

export default App;
