import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </MovieProvider>
  );
}

export default App
