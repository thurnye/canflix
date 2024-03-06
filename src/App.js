import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Details from './Details'
import NavBar from './Components/NavBar'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/"  exact element={<Home/>} />
          <Route path="/details"  exact element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
