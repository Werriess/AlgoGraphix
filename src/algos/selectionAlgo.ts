export async function selectionAlgo(
  arr: number[],
  setArr: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) {
  let sorted = [...arr];
  let len = sorted.length;

  for (let i = 0; i < len - 1; i++) {
    let smallestIndex = i; // Assuming the current element is the smallest

    // Find the index of the smallest element in the unsorted part
    for (let j = i + 1; j < len; j++) {
      if (sorted[j] < sorted[smallestIndex]) {
        smallestIndex = j;
      }
    }
    // Swap the found smallest element with the element at the current index
    if (smallestIndex !== i) {
      [sorted[i], sorted[smallestIndex]] = [sorted[smallestIndex], sorted[i]];

      setArr([...sorted]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
