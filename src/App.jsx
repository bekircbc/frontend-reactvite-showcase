import "./App.scss";
import { PageWelcome } from "./pages/PageWelcome";
import { PageBooks } from "./pages/PageBooks";
import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src="images/icon.png" alt="logo" />
        <h1>Fronted React Vite Showcase</h1>
      </div>
      <NavLink to="/welcome">Welcome</NavLink> |{" "}
      <NavLink to="/books">Books</NavLink>
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/books" element={<PageBooks />} />
      </Routes>
    </div>
  );
}

export default App;
