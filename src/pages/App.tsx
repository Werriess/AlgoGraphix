import "/src/output.css";
import Home from './home.tsx';
import Algo from './algo.tsx';
import BubbleSort from "./bubblesort.tsx";
import MergeSort from "./mergesort.tsx";
import InsertionSort from "./insertionsort.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/algo" element={<Algo/>} />
        <Route path="algo/bubblesort" element={<BubbleSort/>}/>
        <Route path="algo/mergesort" element={<MergeSort/>}/>
        <Route path="algo/insertionSort" element={<InsertionSort/>}/>
      </Routes>
    </Router>
  );
}

export default App;
