import React from "react";
import me from "../../Utils/mine.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={me}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
