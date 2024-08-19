import axios from "axios";
import useTitle from "../hooks/useTitle";
import { BACKEND_URL } from "../utils/url";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderGif from "../assets/LoaderGif.gif";

const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  setTimeout(() => {
    if (error) {
      setError(null);
    }
  }, 4000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/v1/cards/${id}`);
        setData(response.data?.blog);
        useTitle(data?.title || "Details Page");
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className=" flex items-center min-h-[330px] justify-center  w-full ">
          <img src={LoaderGif} className="h-[150px]" alt="src-gif" />
        </div>
      ) : (
        <div>
          {data ? (
            <div className="px-[100px] min-h-[330px] py-[40px] flex-col items-center flex ">
              <h1 className="font-[700] text-[34px]">{data?.title}</h1>
              <p className="text-[20px] mt-5"> {data?.description}</p>
            </div>
          ) : (
            <div className=" flex items-center min-h-[330px] justify-center  w-full">
              <img
                className="h-[50px] px-[15px]"
                src="https://img.icons8.com/?size=100&id=wZx7IfsFeH90&format=png&color=000000"
                alt="error-image"
              />
              <h1 className="empty_text font-[800] text-[43px] text-white">
                No data found !
              </h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DetailsPage;
