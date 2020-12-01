import './App.css';
import Navbar from './Components/Navbar';
import {Route} from 'react-router-dom';
import Login from './Components/Loginform'

function App() {
  return (
    
    <div className="App">
      <Route path="/login" component={Login}></Route> 
     <Route path="/" exact component={Navbar}></Route> 
    </div>
  );
}

export default App;
