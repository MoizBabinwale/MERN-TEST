import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
