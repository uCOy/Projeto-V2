import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesContatos from "../pages/Contatos/contatos";
import PagesIndex from '../pages/Home/Index';
import PageSobre from '../pages/Sobre/PageSobre';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesIndex/>} />
        <Route path="/Contato" element={<PagesContatos/>} />
        <Route path="/Sobre" element={<PageSobre/>} />
      </Routes>
    </Router>
  );
};

export default Root;