import { Routes, Route } from "react-router-dom";
import Search from "./Search.jsx";
import ShowDetails from "./ShowDetails.jsx";

function App() {
  return (
    <div className="app">
      <h1>TV Show Finder</h1>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;