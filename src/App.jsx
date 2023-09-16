import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoePage from "./pages/ShoePage";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":shoeId" element={<ShoePage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
