import axios from "axios";
import { BACKEND_URL } from "../utils/url";
import { useEffect, useState } from "react";
import LoaderGif from "../assets/LoaderGif.gif";
import { DetailCard, StarMark } from "../components/index";
import useTitle from "../hooks/useTitle";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useTitle("Home | Help Center");

  setTimeout(() => {
    if (error) {
      setError(null);
    }
  }, 4000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/v1/cards`);
        setData(response.data?.blogs);
        setFilteredData(response.data?.blogs);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [flag]);

  // STATE TO POST DATA
  const [open, setOpen] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [addErr, setAddErr] = useState("");

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  setTimeout(() => {
    setAddErr("");
  }, 4000);

  const handleSubmit = async () => {
    if (!newTitle) {
      setAddErr("Please Enter title");
      return;
    }
    if (!newDesc) {
      setAddErr("Please Enter description");
      return;
    }

    try {
      setAddLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/cards`, {
        title: newTitle,
        description: newDesc,
      });
      setFlag(!flag);
      setOpen(false);
    } catch (err) {
      setAddErr(
        err.response?.data?.message || error?.message || "Something went wrong!"
      );
    } finally {
      setOpen(false);
      setAddLoading(false);
    }
  };

  // HANDLE SEARCH FUNCTIONALITY
  const handleSearch = () => {
    let filteredBlogs = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredBlogs);
  };

  return (
    <div className=" px-2">
      {/* MAIN PAGE  */}
      <div className="w-full h-[320px] flex flex-col items-center py-[60px]  bg-[#ced8ee]">
        <h1 className=" text-[30px] md:text-[50px] font-[500]">
          How can we help you?
        </h1>
        <div className=" md:w-[600px] h-[60px] border-[1px] border-black flex items-center pl-3 bg-white rounded-[5px] my-[30px]">
          <div className=" w-[93%] h-full justify-center items-center flex">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className=" outline-none h-[90%] w-full"
            />
          </div>
          <div
            onClick={() => handleSearch()}
            className=" w-[7%] cursor-pointer"
          >
            <img
              src="https://img.icons8.com/?size=100&id=z1KH1Tqun1RQ&format=png&color=000000"
              className="w-[30px] justify-end items-end flex"
              alt="search-arrow"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-end items-center p-[20px] w-full h-[70px]">
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-[10px] py-[10px] rounded-xl font-bold hover:ring-4 hover:ring-[gray]"
        >
          Add New Content
        </button>
      </div>
      <div className=" md:px-[100px]   w-full h-full flex  flex-wrap gap-20 justify-center">
        {error && (
          <div className="text-[red] flex justify-center items-center font-bold w-full h-[30px] ">
            {error}
          </div>
        )}
        {loading ? (
          <div className=" flex items-center justify-center  w-full ">
            <img src={LoaderGif} className="h-[150px]" alt="src-gif" />
          </div>
        ) : (
          <div className="flex gap-8">
            {filteredData.length === 0 ? (
              <div className=" font-bold text-[30px] flex items-center justify-center  w-full ">
                No Content found !
              </div>
            ) : (
              <div className=" md:px-[100px] py-[100px]  w-full h-full flex  flex-wrap gap-20 justify-center">
                {filteredData
                  .slice()
                  .reverse()
                  .map((item, key) => (
                    <DetailCard
                      title={item.title || "No Title"}
                      desc={item.description || "No Description"}
                      key={key}
                      id={item._id || "1"}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ADDING POPUP  */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div className="relative bg-white h-max p-2 rounded-lg shadow-lg w-[350px] md:w-[700px] ">
            <button
              className="absolute top-1 right-4 text-[red]  hover:text-[#ec6767] text-2xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <div className="h-full w-full px-4">
              <h2 className="text-[22px] font-bold mb-4 text-center">
                Add New Content
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="flex text-gray-700 font-medium"
                  >
                    Title
                    <StarMark />
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className=" text-gray-700 font-medium flex"
                  >
                    Description
                    <StarMark />
                  </label>
                  <textarea
                    rows="10"
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="text-center pb-4">
                  <div className=" w-full h-[30px] text-[red] font-bold ">
                    {addErr}
                  </div>

                  <button
                    type="button"
                    disabled={addLoading}
                    onClick={handleSubmit}
                    className="bg-[#0d0d0d] text-white py-2 px-4 disabled:bg-[gray] rounded-lg hover:bg-[#4e4d4d] hover:ring-2 hover:ring-[gray] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[gray]"
                  >
                    {addLoading ? "Adding..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
