import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { RequireAuth } from "./util/requireAuth";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
     <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
