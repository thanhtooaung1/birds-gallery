import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BirdDetail from "./pages/BirdDetail";
import BirdsList from "./pages/BirdsList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/birds" element={<BirdsList />}></Route>
          <Route path="/birds/:id" element={<BirdDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
