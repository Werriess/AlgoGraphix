import "/src/output.css";
import AlgoBlock from "../components/algoblocks";
import { bubbleAlgo } from "../algos/bubbleAlgo";

function BubbleSort() {
    return(
        <div className="min-h-screen bg-[rgb(30,30,30)] flex justify-center items-center ">
            <AlgoBlock name="Bubble Sort" sortAlgo={bubbleAlgo} timeComplex="Time complexity: O(n²)"/>
        </div>
    )
}

export default BubbleSort;