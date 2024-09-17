import "/src/output.css";
import AlgoBlock from "../components/algoblocks";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { algos } from "../util/algos";

function AlgoRender() {
  const location = useLocation();
  const [algorithm, setAlgorithm] = useState<string>("");
  useEffect(() => {
    setAlgorithm(location?.pathname?.match(/^\/algo\/(.*)/)?.[1] || "");
  }, [location]);

  return (
    <div className="min-h-screen bg-[rgb(30,30,30)] flex justify-center items-center ">
      <AlgoBlock
        name={algos[algorithm]?.name}
        sortAlgo={algos[algorithm]?.sortAlgo}
        timeComplex={algos[algorithm]?.timeComplex}
      />
    </div>
  );
}

export default AlgoRender;
