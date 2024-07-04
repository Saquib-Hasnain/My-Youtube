import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    
    <div className="flex flex-col w-full">
    <div className="px-5 rounded-xl shadow flex ">
      <div>
      <iframe className="rounded-xl"
        width="1080"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
