import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
        <Route path="/signup" element={<Login/>} />
        <Route path="/logout" />
      </Routes>
    </Router>
  );
}

export default App;
