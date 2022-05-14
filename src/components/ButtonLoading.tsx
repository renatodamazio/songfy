import React, { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import Loader from "../components/Loader";
import { setOpen } from "../store/reducers/albumOpenReducer";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonLoading(props: any) {
  const { album } = props;
  const [pickUpAlbum, setPickUpAlbum] = useState<any>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof pickUpAlbum === "object") {
      dispatch(setOpen(pickUpAlbum));
    }
  }, [pickUpAlbum]);

  return (
    <div
      className={`load-album ease-in-out-cubic cursor-pointer`}
      onClick={() => setPickUpAlbum(album)}
    >
      <MdPlayArrow />
    </div>
  );
}
