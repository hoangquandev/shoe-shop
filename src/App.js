import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/cart";
import DetailProductPage from "./Pages/DetailProduct/detailProductPage";
import HomePage from "./Pages/Home/HomePage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Login from "./Pages/User/Login";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailProduct/:id" element={<DetailProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
