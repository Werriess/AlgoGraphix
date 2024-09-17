export async function quicksortAlgo(
    arr: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    delay: number,
    low: number = 0,
    high: number = arr.length - 1
  ) {
    // Helper function to partition the array
    async function partition(
      array: number[],
      low: number,
      high: number
    ): Promise<number> {
      let pivot = array[high]; // Pivot element (choose the last element)
      let i = low - 1; // Index of smaller element
  
      for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
          i++;
          // Swap array[i] and array[j]
          [array[i], array[j]] = [array[j], array[i]];
          setArr([...array]);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
      // Swap the pivot element with the element at i+1
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      setArr([...array]);
      await new Promise((resolve) => setTimeout(resolve, delay));
  
      return i + 1; // Return the partitioning index
    }
  
    // Base case: If low is less than high, sort the array
    if (low < high) {
      // Partition the array
      let pi = await partition(arr, low, high);
  
      // Recursively sort the subarrays
      await quicksortAlgo(arr, setArr, delay, low, pi - 1); // Sort elements before partition
      await quicksortAlgo(arr, setArr, delay, pi + 1, high); // Sort elements after partition
    }
  }
  