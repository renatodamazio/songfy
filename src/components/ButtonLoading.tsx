import { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import Loader from "../components/Loader";
import { setOpen } from "../store/reducers/albumOpenReducer";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonLoading(props: any) {
  const { album } = props;
  const [pickUpAlbum, setPickUpAlbum] = useState<any>("");
  const albumInfo: any = useSelector<any>((state) => state.albumOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof pickUpAlbum === "object") {
      dispatch(setOpen(pickUpAlbum));
    }
  }, [pickUpAlbum]);

  return (
    <div
      className={`load-album cursor-pointer ${
        albumInfo.albumOpen.name == album.name &&
        "rounded-[50%] bg-white hover:bg-gray "
      }`}
      onClick={() => setPickUpAlbum(album)}
    >
      {albumInfo.albumOpen.name == album.name ? <Loader /> : <MdPlayArrow />}
    </div>
  );
}
