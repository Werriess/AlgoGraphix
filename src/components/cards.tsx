import "/src/output.css";

interface CardProps {
    name: string;
  }

function Card({ name }: CardProps) {
  return (
    <div className=" min-w-[250px] max-w-[250px] min-h-[250px] max-h[250px] bg-white p-2 bg-[rgb(255,255,255)] flex justify-center items-center">
        <p className="text-[rgb(44,135,42)] font-bold border-b">{name}</p>
    </div>
  );
}

export default Card;
