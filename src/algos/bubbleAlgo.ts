export async function bubbleAlgo(
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
  