export async function mergeAlgo(
    arr: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    delay: number
  ): Promise<void> {
    const merge = async (
      left: number[],
      right: number[],
      setArr: React.Dispatch<React.SetStateAction<number[]>>,
      delay: number
    ) => {
      let result: number[] = [];
      let i = 0, j = 0;
      
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i++]);
        } else {
          result.push(right[j++]);
        }
        setArr([...result, ...left.slice(i), ...right.slice(j)]);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      
      return result.concat(left.slice(i)).concat(right.slice(j));
    };
  
    const sort = async (arr: number[]): Promise<number[]> => {
      if (arr.length <= 1) return arr;
  
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
  
      const sortedLeft = await sort(left);
      const sortedRight = await sort(right);
  
      return merge(sortedLeft, sortedRight, setArr, delay);
    };
  
    await sort(arr);
  }
  