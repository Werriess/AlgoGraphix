import "/src/output.css";
import Home from './home.tsx';
import Algo from './algo.tsx';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AlgoRender from "./algorender.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/algo" element={<Algo/>} />
        <Route path="/algo/*" element={<AlgoRender/>} />
      </Routes>
    </Router>
  );
}

export default App;
