import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route,Routes } from 'react-router-dom'
import Contest from "./Contest";
import Problem from "./Problem";
function App() {

  return (
   <Routes>
    <Route path = "/" element = {<Contest/>}/>
    <Route path = "/Problem" element = {<Problem/>}/>
   </Routes>
  );
}

export default App;
