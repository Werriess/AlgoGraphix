import "/src/output.css";
import Card from "../components/cards.tsx";

function Algo() {
  return (
    <div className="min-h-screen bg-[rgb(30,30,30)] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap justify-center gap-5">
          <Card name="Bubble Sort" />
          <Card name="Merge Sort" />
          <Card name="Insertion Sort" />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Card name="Selection Sort" />
          <Card name="Quick Sort" />
          <Card name="Heap Sort" />
        </div>
      </div>
    </div>
  );
}

export default Algo;
