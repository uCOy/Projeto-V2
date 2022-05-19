import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesContatos from "../pages/Contatos/contatos";
import PagesIndex from '../pages/Home/Index';
import PagesSobre from '../pages/Sobre/PageSobre';
import PagesSofas from '../pages/Sofas/PageSofas';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesIndex/>} />
        <Route path="/Contato" element={<PagesContatos/>} />
        <Route path="/Sobre" element={<PagesSobre/>} />
        <Route path="/Sofa" element={<PagesSofas/>} />
      </Routes>
    </Router>
  );
};

export default Root;