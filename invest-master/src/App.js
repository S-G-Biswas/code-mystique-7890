import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SignUp from './pages/register';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Allstocks from './pages/Stocks'
import UserStock from './pages/portfolio';
import Adminstocks from './pages/Adminstocks';




function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route
              exact
              path="/portfolio"
              element={isLoggedIn == 'true'? <UserStock /> : <Login />}
            />
            
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/adminstocks" element={<Adminstocks />} />

          {/* <Route path="/stocks" element={<Allstocks />} /> */}
          <Route
              exact
              path="/stocks"
              element={isLoggedIn == 'true'? <Allstocks /> : <Login />}
            />
          
        </Routes>
         
         
      </div>
    </Router>
    
  );
}

export default App;
