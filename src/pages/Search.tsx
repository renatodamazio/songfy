import React, { useState, useEffect } from "react";
import getArtists from "../api/searchArtist";
import { DebounceInput } from "react-debounce-input";
import cleanStrings from "../utils/cleanStrings";
interface Artist {
  name: string;
  image: [];
  mbid: string;
}

/**
 * *searchState states:
 * ?0=False (Initial)
 * ?1=Searching...
 * ?2=Complete.
 */

export default function Search() {
  const [resultArtist, setResultArtist] = useState([]);
  const [searchState, setSearchState] = useState(0);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(resultArtist);
  }, [resultArtist]);


  const SearchArtists = async (query: string) => {

    setSearchState(0); //Initializing...
    /**
     * *In case the param is empty the search is canceled.
     */
    if (cleanStrings(query).length === 0) return false;

    setSearchState(1); //Searching...

    const results: any = await getArtists({ query });

    setSearchState(2);//Complete...
    return setResultArtist(results?.artist);
  };

  return (
    <div>
      <DebounceInput
        className="w-full p-2 rounded-md text-black font-bold border-2 border-black-500 focus:border-purple transition-all focus:shadow-pink shadow-lg"
        minLength={2}
        debounceTimeout={500}
        onChange={async (event) => await SearchArtists(event.target.value)}
      />
      <ul className="flex flex-col">
        {artists.length && artists?.map((item: Artist, key: number) => {
          return <li className="w-full p-2 border-1 border-b-purple" key={key}>{item.name}</li>;
        })}

        {
          (!artists.length && searchState === 2) && <li>No Results founded</li>
        }
      </ul>
    </div>
  );
}
