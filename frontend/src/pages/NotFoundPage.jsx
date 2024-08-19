import useTitle from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useTitle("Page Not Found");

  return (
    <div className="  flex-col w-full h-[45.5vh] text-white flex justify-center items-center font-[1000] text-[45px]">
      <div className="empty_text">404</div>
      <div className="empty_text">Page Not Found</div>
      <button
        onClick={() => navigate("/")}
        className="text-[white] text-[20px] font-[400] rounded-[4px] my-2 bg-[black] px-3 py-2"
      >
        Go to dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
