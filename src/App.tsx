import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { PrivateRoute } from "./hook/routes";
import useAuth from "./hook/auth";
import SecureLS from "secure-ls";
var ls = new SecureLS();



function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}>
         <PrivateRoute isAuth={user} path="dashboard" component={Home}  redirectTo='/'/>
     </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
