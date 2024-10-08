import "/src/output.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-[rgb(30,30,30)] flex items-center justify-center flex-col gap-20">
      <div>
        <p className="text-white text-5xl">Welcome!</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./assets/GraphHeader.svg" alt="Graph" className="mt-4" />
        <p className="text-white text-2xl">AlgoGraphix</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Link to="/algo">
          <button className="bg-[rgb(255,135,42)] text-white p-2">
            Let's go
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
