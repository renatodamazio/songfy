import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import searchArtist from "../api/searchArtist";
import Loader from "../components/Loader";
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
focus:border-orange
focus:shadow-orange
focus:shadow-md
shadow-sm
px-6`;

export default function Home() {
  const [artists, setArtists] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
  return (
    <div className={`flex p-10 align-center justify-center h-screen flex-col`}>
      <div className={`input-search-wrapper  ${loading ? "loading" : ""}`}>
        <DebounceInput
          type="search"
          placeholder="O que gostaria de ouvir ?"
          autoFocus
          debounceTimeout={300}
          onChange={async (ev) => await getArtistsFromLastFM(ev.target.value)}
          className={classNames}
        />
        {loading ? <Loader className="absolute top-0 right-0" /> : ""}
      </div>
      {artists.length > 0 ? (
        <ul className="transition-all rounded-md shadow-inner shadow-md border-gray shadow-sm-gray p-4">
          {artists.map((artist: any, key: number) => {
            return (
              <li
                key={key}
                className="p-2 font-bold rounded-md transition-colors cursor-pointer hover:text-white-egg hover:bg-orange"
              >
                {artist.name}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
