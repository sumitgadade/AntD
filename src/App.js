import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableComponent from "./components/TableComponent";
import ViewData from "./components/ViewData";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<TableComponent />} />
            <Route path="/data" element={<TableComponent />} />
            <Route path="/data/view/:id" element={<ViewData />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
