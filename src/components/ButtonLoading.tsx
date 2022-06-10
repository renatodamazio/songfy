import { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import Loader from "../components/Loader";
import { setOpen } from "../store/reducers/albumOpenReducer";
import { useDispatch } from "react-redux";

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
      className={`load-album cursor-pointer ${
        props.loading &&
        "rounded-[50%] bg-white hover:bg-gray "
      }`}
      onClick={() => setPickUpAlbum(album)}
    >
      {props.loading ? <Loader /> : <MdPlayArrow />}
    </div>
  );
}
