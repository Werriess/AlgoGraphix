import "/src/output.css";
import AlgoBlock from "../components/algoblocks";
import { mergeAlgo } from "../algos/mergeAlgo";

function MergeSort() {
    return(
        <div className="min-h-screen bg-[rgb(30,30,30)] flex justify-center items-center ">
            <AlgoBlock name="Merge Sort" sortAlgo={mergeAlgo} timeComplex=" Time ComplexityO(nLogn)"/>
        </div>
    )
}

export default MergeSort;