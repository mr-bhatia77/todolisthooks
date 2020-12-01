import './App.css';
import Navbar from './Components/Navbar';
import {Route} from 'react-router-dom';
import Login from './Components/Loginform';
import Todoform from './Components/Todoform';
function App() {
  return (
    
    <div className="App">
      <Route path="/login" component={Login}></Route> 
     <Route path="/" exact component={Navbar}></Route> 
     <Route path="/addlog" exact component={Todoform}></Route> 
    </div>
  );
}

export default App;
