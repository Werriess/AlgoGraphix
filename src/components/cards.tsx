import "/src/output.css";
import { useNavigate } from 'react-router-dom';

interface CardProps {
  name: string;
  route: string;
}

function Card({ name, route }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className=" min-w-[250px] max-w-[250px] min-h-[250px] max-h[250px] bg-white p-2 bg-[rgb(40,40,40)] flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-[rgb(255,135,42)] font-bold border-b">{name}</p>
    </div>
  );
}

export default Card;
