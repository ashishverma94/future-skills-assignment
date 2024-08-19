import IconMain from "../assets/icons-main.png";

const Header = () => {
  return (
    <header className="w-full h-[90px] flex justify-center items-end">
      <div className="bg-[black] w-[99%] flex rounded-tl-[20px] rounded-tr-[20px] h-[85px] justify-end items-center ">
        <div className="w-[50%] h-full flex items-center pl-7">
          <img src={IconMain} className="h-[30px] px-1" alt="icon-main" />
          <span className="font-[600] text-white text-[20px]"> Abstract </span>
          <span className="font-[200] text-white text-[20px]">
            &#160; | Help Center
          </span>
        </div>
        <div className="w-[40%] h-full flex justify-center items-center">
          <button className="text-[white] px-4 py-2 border-[1px] rounded-md">
            Submit a request
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
