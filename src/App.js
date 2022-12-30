
import React from "react";
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Card1 from "./component/CARD";



function App() { 

  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={< Card1 />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
