import React from "react";
import Menu from "./components/menu/Menu";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
