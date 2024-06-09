import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Login from "./Login";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route index path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>     
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);