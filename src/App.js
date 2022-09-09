import { BrowserRouter, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import Home from "./components/Home";
import "./components/style.css";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/cart' exact>
        <CartPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
