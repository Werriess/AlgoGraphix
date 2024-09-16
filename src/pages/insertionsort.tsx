import "/src/output.css";
import AlgoBlock from "../components/algoblocks";
import { insertionAlgo } from "../algos/insertionAlgo";

function InsertionSort() {
    return(
        <div className="min-h-screen bg-[rgb(30,30,30)] flex justify-center items-center ">
            <AlgoBlock name="Insertion Sort" sortAlgo={insertionAlgo} timeComplex="Time Complexity O(n²)"/>
        </div>
    )
}

export default InsertionSort;