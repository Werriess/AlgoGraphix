export async function insertionAlgo(
    arr: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    delay: number
  ) {
    let sorted = [...arr];
    let len = sorted.length;
  
    for (let i = 1; i < len; i++) {
      let key = sorted[i];
      let j = i - 1;
  
      while (j >= 0 && sorted[j] > key) {
        sorted[j + 1] = sorted[j];
        j = j - 1;
      }
      sorted[j + 1] = key;
  
      setArr([...sorted]);
  
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  