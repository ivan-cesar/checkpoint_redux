import './App.css';
import Addtask from './composants/Addtask.js';
import Header from './composants/Header';
import ListeTache from './composants/ListeTache.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Addtask/>      
    </div>
  );
}

export default App;
