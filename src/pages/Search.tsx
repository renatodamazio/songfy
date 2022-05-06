import React, { useState, useEffect, HtmlHTMLAttributes } from "react";
import { useSearchParams, Link } from "react-router-dom";
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

window.history as HtmlHTMLAttributes<any>;
window.location.search as HtmlHTMLAttributes<any>;

export default function Search() {
  const [resultArtist, setResultArtist] = useState([]);
  const [searchState, setSearchState] = useState<number>(0);
  const [artists, setArtists] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [searchParams, {}] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get("search") as string;
    if (typeof searchValue === "string") {
      setInputSearchValue(searchValue);
    }
  }, []);

  useEffect(() => {
    setArtists(resultArtist);
  }, [resultArtist]);

  const clearSearch = (): boolean => {
    window.history.pushState(
      {},
      document.title,
      "/" +
        window.location.href
          .substring(window.location.href.lastIndexOf("/") + 1)
          .split("?")[0]
    );
    setResultArtist([]);
    return true;
  };

  const SearchArtists = async (query: string) => {
    setSearchState(0); //Initializing...
    /**
     * *In case the param is empty the search is canceled.
     */
    if (cleanStrings(query).length === 0) {
      clearSearch();
      return false;
    }

    query = query.replace(/ {1}/gi, "+");

    setSearchState(1); //Searching...

    window.history.pushState({ page: 1 }, "title 1", `?search=${query}`);

    const results: any = await getArtists({ query });

    setSearchState(2); //Complete...
    return setResultArtist(results?.artist);
  };

  const redirectToResultPage = () => {
    setArtists([]);
    setResultArtist([]);
  }

  return (
    <div>
      <DebounceInput
        type="search"
        value={inputSearchValue}
        className="w-full p-4 rounded-lg text-black font-bold border-2 border-black-500 focus:border-purple transition-all focus:shadow-pink shadow-lg"
        minLength={0}
        debounceTimeout={500}
        onChange={async (event) => await SearchArtists(event.target.value)}
      />
      <ul className="flex flex-col">
        {artists.length &&
          artists?.map((item: Artist, key: number) => {
            return (
              <li className="w-full p-2 border-1 border-b-purple" key={key}>
                <Link
                  to={`results/${item.name}`}
                  onClick={redirectToResultPage}
                  className="w-full inline-block"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

        {!artists.length && searchState === 2 && <li>No Results founded</li>}
      </ul>
    </div>
  );
}
