import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Header from "./components/Header";
import CheckoutProvider from "./context/CheckoutContext";

function App() {
  return (
    <>
      <CheckoutProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CheckoutProvider>
    </>
  );
}

export default App;
