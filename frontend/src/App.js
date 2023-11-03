import {BrowserRouter, Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
