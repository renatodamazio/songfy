import React, { memo, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns, { getMockAlbuns } from "../api/getAlbuns";
import { setAlbums } from "../store/reducers/albumsReducer";
import Carousel from "../components/Carousel";
import VinylPlayer from "../components/VinylPlayer";
import getAlbumTracks from "../api/getAlbumTrack";
import { useSearchParams  } from "react-router-dom";

export default function Results() {
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [vinyl, setVinyl] = useState<any>([]);
  const [loadinTracks, setLoadingTracks] = useState<boolean>(false);
  const albums: any = useSelector<any>((state) => state.albums);
  const album: any = useSelector<any>((state) => state.albumOpen);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const getArtistAlbums = async (query: string) => {
    setLoading(true);
    const artistAlbums = await getMockAlbuns();
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

  const loadAlbumTracks = async (props: any) => {
    const { artist, album } = props;
    setLoadingTracks(true);
    const tracks = await getAlbumTracks(artist, album);
    setLoadingTracks(false);

    setSearchParams(`album=${album}`);
    console.log(tracks);
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

  useEffect(() => {
    if (album.albumOpen) {
      loadAlbumTracks({
        artist: album.albumOpen.artist.name,
        album: album.albumOpen.name,
      });
    }
  }, [album]);

  return (
    <div>
      <VinylPlayer />
      <Carousel loading={loadinTracks} items={vinyl} />{" "}
      {notFound ? "Não foi encontrado" : ""}
    </div>
  );
}
