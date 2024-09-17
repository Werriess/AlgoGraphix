export async function mergeAlgo(
  arr: number[],
  setArr: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
): Promise<void> {
  // Function to merge two sorted arrays
  const merge = async (
    left: number[],
    right: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    delay: number
  ): Promise<number[]> => {
    const mergedArray: number[] = [];
    let i = 0, j = 0;

    // Merge elements from left and right arrays based on comparison
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }

      // Update the array visually and pause for a delay
      setArr([...mergedArray, ...left.slice(i), ...right.slice(j)]);
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Add remaining elements from both arrays (if any)
    return [...mergedArray, ...left.slice(i), ...right.slice(j)];
  };

  // Function to recursively sort the array
  const mergeSort = async (arr: number[]): Promise<number[]> => {
    if (arr.length <= 1) return arr; // Base case: array is already sorted

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = await mergeSort(leftHalf);
    const sortedRight = await mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight, setArr, delay);
  };

  // Start the merge sort algorithm
  await mergeSort(arr);
}
