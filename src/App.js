import './App.css';
import Todolist from './Components/TodoList';
import Todoform from './Components/Todoform'

function App() {
  return (
    <div className="App">
      <Todolist></Todolist>
      <Todoform></Todoform>
    </div>
  );
}

export default App;
