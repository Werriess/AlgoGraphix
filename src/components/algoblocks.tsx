import "/src/output.css";
import { useState } from "react";

function getUserInput(userInput: string): number[] {
  return userInput
    .split(",")
    .map((value) => parseFloat(value.trim()))
    .filter((value) => !isNaN(value));
}

type AlgoBlockProps = {
  sortAlgo: (
    arr: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    delay: number
  ) => Promise<void>;
  name: string;
  timeComplex: string;
};

function generateRandomNumbers(size: number): number[] {
  const randomNumberArr: number[] = [];
  for (let i = 0; i < size; i++) {
    let newNumber = Math.random() * 100;
    randomNumberArr.push(newNumber);
  }
  return randomNumberArr;
}

function scaleNumbers(value: number, min: number, max: number, newMin: number, newMax: number): number {
  return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function AlgoBlock({ sortAlgo, name, timeComplex }: AlgoBlockProps) {
  const [arr, setArr] = useState<number[]>([]);
  const [sortingDone, setSortingDone] = useState<boolean>(false);

  const showBar = () => {
    const inputElement = document.getElementById("userIn") as HTMLInputElement;
    if (!inputElement) return;
    const userInput = inputElement.value;
    const parsedArr = getUserInput(userInput);
    setArr(parsedArr);
  };

  const getRandomNum = () => {
    const randomNumbers = generateRandomNumbers(20);
    setArr(randomNumbers);
  };

  const handleSort = async () => {
    setSortingDone(false); 
    await sortAlgo(arr, setArr, 50);
    setSortingDone(true);
  };

  const minValue = Math.min(...arr, 0); 
  const maxValue = Math.max(...arr, 0);

  return (
    <div className="w-[977px] bg-[rgb(40,40,40)] flex flex-col justify-center items-center w-[50rem] text-white">
      <div id="algoBlock" className="flex flex-col gap-8 text-white w-[20rem]">
        <div id="options" className="flex flex-col gap-8 text-white w-[20rem]">
          <u>
            <h1 className="flex justify-center font-bold">{name}:</h1>
          </u>
          <div className="flex gap-20">
            <label>Enter values:</label>
            <input
              className="bg-[rgb(40,40,40)]"
              id="userIn"
              type="text"
              placeholder="1, 2, 3, 4..."
            />
          </div>
          <button className="bg-[rgb(255,135,42)] p-2 rounded" onClick={showBar}>
            Add
          </button>
          <button
            className="bg-[rgb(255,135,42)] p-2 rounded"
            onClick={getRandomNum}
          >
            Random numbers
          </button>
          <button
            className="bg-[rgb(255,135,42)] p-2 rounded"
            onClick={handleSort}
          >
            Sort
          </button>
        </div>
      </div>
      <div className="flex gap-1 h-[15rem] mt-5">
        {arr.map((element, index) => {
          const scaledHeight = scaleNumbers(element, minValue, maxValue, 0, 100);
          return (
            <div
              key={index}
              style={{
                height: scaledHeight + "px",
                backgroundColor: "rgb(255,135,42)",
                width: "10px",
                transition: "height 0.3s ease",
              }}
            ></div>
          );
        })}
      </div>
      {sortingDone && (
        <p>{timeComplex}</p> 
      )}
    </div>
  );
}

export default AlgoBlock;
