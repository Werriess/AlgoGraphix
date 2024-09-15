import "/src/output.css";
import { useState } from "react";

function getUserInput(userInput: string): number[] {
  return userInput
    .split(",")
    .map((value) => parseFloat(value.trim()))
    .filter((value) => !isNaN(value));
}

async function Bubblesort(
  arr: number[],
  setArr: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) {
  let sorted = [...arr];
  let len = sorted.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;

        setArr([...sorted]);

        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
}

function AlgoBlock() {
  const [arr, setArr] = useState<number[]>([]);

  const showBar = () => {
    const inputElement = document.getElementById("userIn") as HTMLInputElement;
    if (!inputElement) return;
    const userInput = inputElement.value;
    const parsedArr = getUserInput(userInput);
    setArr(parsedArr);
  };

  const handleSort = () => {
    Bubblesort(arr, setArr, 300);
  };

  return (
    <div className="w-[977px] bg-[rgb(40,40,40)] h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] flex justify-center">
      <div id="algoBlock" className="flex flex-col gap-8">
        <div className="flex gap-20">
          <label className="text-white">Enter values:</label>
          <input className="bg-[rgb(40,40,40)]" id="userIn" type="text" placeholder="1, 2, 3, 4..." />
        </div>
        <button
          className="bg-[rgb(255,135,42)] p-2 text-white rounded"
          onClick={showBar}
        >
          Add
        </button>
        <button
          className="bg-[rgb(255,135,42)] p-2 text-white rounded"
          onClick={handleSort}
        >
          Sort
        </button>
        <div>
          <p className="text-white">Original Array: {arr.join(", ")}</p>
        </div>
        <div className="flex gap-1">
          {arr.map((element, index) => (
            <div
              key={index}
              style={{
                height: (element <= 1 ? element * 10 : element) + "px",
                backgroundColor: "rgb(44,135,42)",
                width: "30px",
                transition: "height 0.3s ease", 
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlgoBlock;
