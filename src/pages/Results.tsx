import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns from "../api/getAlbuns";
import { setAlbums } from "../store/reducers/albumsReducer";
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

      // getArtistAlbums(query);
    }
  }, []);

  useEffect(() => {
    mountAlbumProperties();
  }, [albums]);

  const ShowVinyl = () => {
    return (
      <Carousel>
        {vinyl.map((item: any, key: number) => {
          return (
            <Item key={key} name={item.name} indice={key}>
              <>
                <Image
                  key={key}
                  className="w-80 rounded-lg h-80 inline-block "
                  src={getAlbumImage(item.image)}
                />{" "}
              </>
            </Item>
          );
        })}
      </Carousel>
    );
  };

  return (
    <div>
      <Vinyl />
      {loading && !notFound ? "loading" : <ShowVinyl />}
      {notFound ? "Não foi encontrado" : ""}
    </div>
  );
}
