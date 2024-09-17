import { Dispatch, SetStateAction } from "react";
import { bubbleAlgo } from "../algos/bubbleAlgo";
import { mergeAlgo } from "../algos/mergeAlgo";
import { insertionAlgo } from "../algos/insertionAlgo";
import { selectionAlgo } from "../algos/selectionAlgo";

export const algos: {
  [key: string]: {
    name: string;
    sortAlgo: (
      arr: number[],
      setArr: Dispatch<SetStateAction<number[]>>,
      delay: number
    ) => Promise<void>;
    timeComplex: string;
  };
} = {
  bubblesort: {
    name: "Bubble Sort",
    sortAlgo: bubbleAlgo,
    timeComplex: "Time complexity: O(n²)",
  },
  mergesort: {
    name: "Merge Sort",
    sortAlgo: mergeAlgo,
    timeComplex: "Time complexity: O(nLogn)",
  },
  insertionsort: {
    name: "Insertion Sort",
    sortAlgo: insertionAlgo,
    timeComplex: "Time complexity: O(n²)",
  },
  selectionsort: {
    name: "Selection Sort",
    sortAlgo: selectionAlgo,
    timeComplex: "Time complexity: O(n²)",
  },
};
