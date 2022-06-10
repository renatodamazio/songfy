import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Link } from "react-router-dom";
import getAlbuns from "../api/getAlbuns";
import searchArtist from "../api/searchArtist";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { setAlbums } from "../store/reducers/albumsReducer";
import { setAlbumTrack } from "../store/reducers/albumTrackReducer";
import { useNavigate } from "react-router-dom";
import { setOpen } from "../store/reducers/albumOpenReducer";

const classNames = `
rounded-md 
w-full h-20 
text-black 
font-bold 
text-3xl 
uppercase 
border-2
border-gray
shadow-inner
transition-all
duration-200
focus:border-orange
focus:shadow-orange
focus:shadow-md
shadow-sm
border-1
bg-transparent
border-[#282828]
shadow-[0px_0px_1px_3px_#1a1a1a]
px-6`;

export default function Home() {
  const [artists, setArtists] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetCurrentResult = () => {
    dispatch(setOpen(false));
    dispatch(setAlbumTrack([]));
  }

  const getArtistsFromLastFM = async (query: string) => {
    if (query.replace(/ {1}/gi, "").length === 0) {
      setArtists([]);
      return;
    }
    setLoading(true);
    const result: any = await searchArtist({ query });
    setArtists(result.artist);
    setLoading(false);
  };

  const redirectToResultsPage = async (query: string) => {
    resetCurrentResult();
    setLoading(true);
    const albums: any = await getAlbuns(query);
    
    dispatch(setAlbums(albums));
    setLoading(false);
    navigate(`/results/${query}`);
    setArtists([]);
  };

  return (
    <>
      <div className={`relative glass-morphism  ${loading ? "loading" : ""}`}>
        <DebounceInput
          type="search"
          placeholder="O que gostaria de ouvir ?"
          autoFocus
          debounceTimeout={300}
          style={{color: "#fff"}}
          onChange={async (ev) => await getArtistsFromLastFM(ev.target.value)}
          className={classNames}
        />
        {loading ? <Loader className="absolute top-0 right-0" /> : ""}
      </div>
      {artists.length > 0 ? (
        <ul className="suggestion-list glass-morphism">
          {artists.map((artist: any, key: number) => {
            return (
              <li key={key} className="">
                <Link
                  className="suggestion-item"
                  to={"#"}
                  onClick={() => redirectToResultsPage(`${artist.name}`)}
                >
                  {artist.name}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
