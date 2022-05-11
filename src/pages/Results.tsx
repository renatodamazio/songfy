import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns from "../api/getAlbuns";
import { setAlbums } from "../store/reducers/albumsReducer";
import Image from "../components/Image";
import Carousel, { Item } from "../components/Carousel";
import Tracks from "../components/Tracks";
import Vinyl from "../components/Vinyl";

export default function Results() {
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [vinyl, setVinyl] = useState<any>([]);
  const albums: any = useSelector<any>((state) => state.albums);
  const [albumSelected, setAlbumSelected] = useState<object>({});

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

  const setAlbumInfo = (props: any) => {
    props.env.preventDefault();
    setAlbumSelected({
      name: props.name,
      artist: props.artist,
    });
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
        <Tracks album={albumSelected} />
        <Carousel>
          {vinyl.map((item: any, key: number) => {
            return (
              <Item key={key} name={item.name} indice={key}>
                <>
                  <Image
                    key={key}
                    role="button"
                    className="rounded-lg inline-block z-10 relative"
                    src={getAlbumImage(item.image)}
                    onClick={(env: any) => {
                      setAlbumInfo({ env: env, name: item.name, artist: item.artist.name });
                    }}
                  />
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
