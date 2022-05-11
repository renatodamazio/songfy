import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns from "../api/getAlbuns";
import { setAlbums } from "../store/reducers/albumsReducer";
import Image from "../components/Image";

export default function Results() {
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [vinil, setVinil] = useState<any>([]);
  const albums: any = useSelector<any>((state) => state.albums);
  
  const location = useLocation();
  const dispatch = useDispatch();

  const getArtistAlbums = async (query: string) => {
    setLoading(true);
    const artistAlbums = await getAlbuns(query);
    dispatch(setAlbums(artistAlbums));
    setLoading(false);
  };

  const mountAlbumProperties = () => {
    const getAlbumData = albums?.album;

    if (getAlbumData && getAlbumData.length) {
      setVinil(getAlbumData);
      setNotFound(false);
    }

    setLoading(false);
  };

  const getAlbumImage = (data: any[]) => {
    const largeImage = data[2];
    return largeImage["#text"];
  };

  useEffect(() => {
    if (albums.album === "") {
      const pathname = location.pathname;
      const query = pathname.replace("/results/", "");

      if (query.replace(/ {1}/gi, "").length === 0) {
        return setNotFound(true);
      }

      getArtistAlbums(query);
    }
  }, []);

  useEffect(() => {
    mountAlbumProperties();
  }, [albums]);

  const ShowVinil = () => {
    return (
      <ul>
        <li>
          {vinil.map((item: any, key: number) => {
            return (
              <li key={key} className="flex flex-col justify-center content-center w-full">
                <Image
                  className="w-80 rounded-lg h-80 inline-block "
                  src={getAlbumImage(item.image)}
                />{" "}
                {item.name}
              </li>
            );
          })}
        </li>
      </ul>
    );
  };

  return (
    <div>
      {loading && !notFound ? "loading" : <ShowVinil />}
      {notFound ? "Não foi encontrado" : ""}
    </div>
  );
}
