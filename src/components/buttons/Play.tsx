import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Loading from "../Loading";

import { useSelector } from "react-redux";
export default function Play(props: any) {
  const [size, setSize] = useState<string>();
  const musicStatus = useSelector((state: any) => state.video);

  useEffect(() => {
    switch (props.size) {
      case "big":
        setSize(
          "text-4xl p-4 rounded-full flex items-center justify-center border-2 border-white"
        );
        return;
      case "small":
        setSize("text-xs p-1 border-2 rounded-full border-white");
        return;
    }
  }, []);
  return (
    <>
      {musicStatus.status === 3 && <Loading />}
      {(musicStatus.status === 0 || musicStatus.status <= 1) && (
        <button
          data-track={""}
          onClick={props.onClick}
          className={`${size} hover:text-pink transition-all`}
        >
          <FaPlay />
        </button>
      )}
    </>
  );
}
