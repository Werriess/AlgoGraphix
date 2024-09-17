export async function mergeAlgo(
  arr: number[],
  setArr: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) {
  let sorted = [...arr];
  
  async function mergeSortRecursive(arr: number[], left: number, right: number) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      
      // Recursively sort the first half
      await mergeSortRecursive(arr, left, mid);
      
      // Recursively sort the second half
      await mergeSortRecursive(arr, mid + 1, right);
      
      // Merge the sorted halves
      await merge(arr, left, mid, right);
    }
  }
  
  async function merge(arr: number[], left: number, mid: number, right: number) {
    let leftSubLen = mid - left + 1;
    let rightSubLen = right - mid;
    
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    
    //Run until no elements are left to compare in both subarrays
    while (i < leftSubLen && j < rightSubLen) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k++] = leftArr[i++];
      } else {
        arr[k++] = rightArr[j++];
      }
      
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, delay));
      //before a the merge sorting can continue, it should wait for the time out to complete
    }
    
    while (i < leftSubLen) {
      arr[k++] = leftArr[i++];
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    
    while (j < rightSubLen) {
      arr[k++] = rightArr[j++];
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  
  await mergeSortRecursive(sorted, 0, sorted.length - 1);
}
