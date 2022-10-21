import TokenName from "./pages/TokenName";
import TokenSymbol from "./pages/TokenSymbol";
import TokenDistribution from "./pages/TokenDistribution";
import SelectChain from "./pages/SelectChain";
import TokenResume from "./pages/TokenResume";
import './css/responsiveness/laptop.css'
import './css/responsiveness/tablet.css'
import './css/responsiveness/phone.css'

import { Routes, Route } from "react-router-dom"

function App() {
  return (

    <Routes>
      <Route path="/" element={<TokenName />} />
      <Route path="token-symbol" element={<TokenSymbol />} />
      <Route path="token-distribution" element={<TokenDistribution />} />
      <Route path="select-chain" element={<SelectChain />} />
      <Route path="token-resume" element={<TokenResume />} />
    </Routes>

  );
}

export default App;
