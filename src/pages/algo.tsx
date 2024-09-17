import "/src/output.css";
import Card from "../components/cards.tsx";

function Algo() {
  return (
    <div className="min-h-screen bg-[rgb(30,30,30)] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap justify-center gap-5">
          <Card name="Bubble Sort" route="/algo/bubblesort"/>
          <Card name="Merge Sort" route="/algo/mergesort"/>
          <Card name="Insertion Sort" route="/algo/insertionsort"/>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Card name="Selection Sort" route="/algo/selectionsort"/>
          <Card name="Quick Sort" route="/algo/quicksort"/>
        </div>
      </div>
    </div>
  );
}

export default Algo;
