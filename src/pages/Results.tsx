import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns from "../api/getAlbuns";
import { setAlbums } from "../store/reducers/albumsReducer";
import Carousel from "../components/Carousel";
import Tracks from "../components/Tracks";

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
        <Carousel items={vinyl} />
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
