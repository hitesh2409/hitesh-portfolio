import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from './Components/Projects/Project';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
