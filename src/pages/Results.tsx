import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns from "../api/getAlbuns";
import { setAlbums, setOpen } from "../store/reducers/albumsReducer";
import Image from "../components/Image";
import Carousel, { Item } from "../components/Carousel";
import Vinyl from "../components/Vinyl";

export default function Results() {
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [vinyl, setVinyl] = useState<any>([]);
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
      setVinyl(getAlbumData);
      setNotFound(false);
    }

    setLoading(false);
  };

  const getAlbumImage = (data: any[]) => {
    const largeImage = data[3];
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

  const ShowVinyl = () => {
    return (
      <div id="results-wrapper">
        <Carousel>
          {vinyl.map((item: any, key: number) => {
            return (
              <Item
                key={key}
                name={item.name}
                indice={key}
               
              >
                <>
                  <Image
                    key={key}
                    className="rounded-lg inline-block z-10 relative"
                    src={getAlbumImage(item.image)}
                    onClick={() => dispatch(setOpen(true))}
                  />{" "}
                  <div className="absolute top-0 left-0 z-0 py-2">
                    {" "}
                    <Vinyl image={getAlbumImage(item.image)} />{" "}
                  </div>
                </>
              </Item>
            );
          })}
        </Carousel>
      </div>
    );
  };

  return (
    <div>
      {loading && !notFound ? "loading" : <ShowVinyl />}
      {notFound ? "Não foi encontrado" : ""}
    </div>
  );
}
