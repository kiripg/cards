import React from 'react';
import {BrowserRouter} from  "react-router-dom";
import './App.css';
import Router from './Routers/Router';

function App() {
  return (
   <BrowserRouter>
   <Router />
   </BrowserRouter>
  );
}

export default App;
