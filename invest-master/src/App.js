import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SignUp from './pages/register';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Allstocks from './pages/Stocks'



function App() {
  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      <div className="App">
        <Navbar />
      
        <Routes>
          {/* <Route
              exact
              path="/"
              element={isLoggedIn == "true" ? <Homepage /> : <Login />}
            /> */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/stocks" element={<Allstocks />} />
          
        </Routes>
         
         
      </div>
    </Router>
    
  );
}

export default App;
