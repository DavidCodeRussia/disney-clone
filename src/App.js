import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Detail from "./components/Home/Detail/Detail";
import Movies from "./components/Movies/index.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
