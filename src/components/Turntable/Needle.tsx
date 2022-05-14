import React from "react";

export default function Needle() {
  return (
    /**
     * *Needle base...
     */
    <div className="absolute w-20 h-20 top-8 right-2 rounded-full bg-black border-2 shadow-md border-gray">
      <div className="absolute h-40 w-4 middle-screen bg-black">
        <span className="absolute h-6 border top-2 w-6 left-1/2 -translate-x-1/2 bg-white"></span>
        <div className="absolute top-full h-20 bg-black w-full">
          <div className="rounded-full w-4 h-5 bg-black  absolute -bottom-3"></div>
          <div className="absolute top-full h-20 bg-black w-full rotate-[37deg] -left-[20px] -translate-y-[6px] rounded-t-full">
            {
              //Needle parent...
            }
            <div className="absolute top-full left-1/2 -translate-x-1/2 shadow-[0_0px_0px_2px_rgb(0,0,0)] w-[18px] h-8 rounded-sm bg-yellow">
                <i className="absolute top-1/2 -translate-y-1/2 w-5 h-1 bg-orange left-1/2"></i>
            </div>
            {
              //.Needle parent...
            }
          </div>
        </div>
      </div>
    </div>
  );
}
