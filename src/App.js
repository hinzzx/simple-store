import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productz" />
        <Route path="/contact" />
        <Route path="/about" />
        <Route path="/signup" element={<Login/>} />
        <Route path="/logout" />
      </Routes>
    </Router>
  );
}

export default App;
