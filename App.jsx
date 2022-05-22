import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './Components/Home';
import Nav from './Components/Nav';
import { SignUp } from './Components/SignUp';
import { Login } from './Components/Login';
import { NotFound } from './Components/NotFound';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
<Routes>
  <Route  path="/home" element={<Home/>} />
  <Route  path="/signup" element={<SignUp/>} />
  <Route  path="/login" element={<Login/>} />
  {/* <Route component={NotFound}/> */}
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
