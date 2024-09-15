import "/src/output.css";
import { useState } from "react";

function getUserInput(userInput: string): number[] {
  return userInput
    .split(",")
    .map((value) => parseFloat(value.trim()))
    .filter((value) => !isNaN(value));
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

  return (
    <div className="w-[977px] bg-[rgb(250,250,250)] h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] flex justify-center items-center">
      <div id="algoBlock" className="flex flex-col gap-8">
        <div className="flex gap-20">
          <label>Enter values:</label>
          <input id="userIn" type="text" placeholder="1, 2, 3, 4..." />
        </div>
        <button
          className="bg-[rgb(44,135,42)] p-2 text-white rounded"
          onClick={showBar}
        >
          Sort
        </button>
        <div>
          <p>Original Array: {arr.join(", ")}</p>
        </div>
        <div className="flex gap-1">
          {arr.map((element, index) => (
            <div
              key={index}
              style={{
                height: (element <= 20 ? element * 10 : element) + "px",
                backgroundColor: "rgb(44,135,42)",
                width: "30px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlgoBlock;
