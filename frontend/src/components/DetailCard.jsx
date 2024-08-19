import { useNavigate } from "react-router-dom";

const DetailCard = ({ title, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className="w-[300px] md:w-[400px] cursor-pointer hover:shadow-lg h-min-[170px] hover:border-black border-[#bbb9b9] border-[1px] bg-[#f0ececaf] rounded-[14px]"
    >
      <div className="w-full h-max  border-b-[1px] border-[#bbb9b9]">
        <h1 className="px-[15px] pt-4 text-[18px] font-bold mb-2 flex flex-wrap">
          {title}
        </h1>
      </div>
      <div className="w-full h-max">
        <p className="px-[15px] pt-2 text-[18px] mb-2 flex flex-wrap">
          {desc.slice(0, 200)}
          {desc.length >= 200 && "..."}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
