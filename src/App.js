import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:coinId" element={<CoinDetails />} />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
    </Router>
    
  );
}

export default App;
