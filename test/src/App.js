import Chat from './components/Chat';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [click, setClick]= useState(0)

  const sendMessage = () => {
    setClick(click+1);
  };
  console.log("App")

  return (
    <div className="App">
      <Chat></Chat>
      <button onClick={sendMessage} >Button</button>
    </div>
  );
}

export default App;
