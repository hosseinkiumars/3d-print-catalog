import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;