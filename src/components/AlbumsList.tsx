import Image from "./Image";
import getImageFromAPi from "../utils/getImageFromApi";
import { Link } from "react-router-dom";
import { setOpen } from "../store/reducers/albumOpenReducer";
import { useDispatch } from "react-redux";

export default function AlbumsList(props: any) {
  const { albums } = props;
  const dispatch = useDispatch();
  return (
    <div className="glass-morphism h-full absolute top-0 left-0 z-20 text-white opacity-5 hover:opacity-100 transition-ease-in-renato px-4">
      <ul className="overflow-y-auto h-full">
        {albums.album &&
          albums?.album?.map((item: any) => {
            return (
              <li
                key={item.name}
                className="p-2 transition-ease-in-renato hover:scale-105"
              >
                <Link to={"#!"} onClick={() => dispatch(setOpen(item))}>
                  <Image
                    className="rounded-lg"
                    alt={item.name}
                    src={getImageFromAPi({ images: item.image, size: 2 })}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
