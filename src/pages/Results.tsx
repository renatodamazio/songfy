import React, { memo, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbuns, { getMockAlbuns } from "../api/getAlbuns";
import { setAlbums } from "../store/reducers/albumsReducer";
import { setAlbumTrack } from "../store/reducers/albumTrackReducer";
import Carousel from "../components/Carousel";
import VinylPlayer from "../components/VinylPlayer";
import TurnTable from "../components/Turntable";
import getAlbumTracks, { getMockAlbumTracks } from "../api/getAlbumTrack";
import { useSearchParams } from "react-router-dom";

export default function Results() {
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [vinyl, setVinyl] = useState<any>([]);
  const [openClass, setOpenClass] = useState<any>([]);
  const [turntableClass, setTurntableClass] = useState<any>([]);
  const [loadinTracks, setLoadingTracks] = useState<boolean>(false);
  const albums: any = useSelector<any>((state) => state.albums);
  const album: any = useSelector<any>((state) => state.albumOpen);
  const location = useLocation();
  const dispatch = useDispatch();
  const [{}, setSearchParams] = useSearchParams();

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

    // const albumTracks: any = await getAlbumTracks(artist, album);
    const albumTracks: any = getMockAlbumTracks();
    const tracks = albumTracks?.tracks?.track || albumTracks;
    setLoadingTracks(false);

    setSearchParams(`album=${album}`);
    dispatch(setAlbumTrack(tracks));
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

      OpenRecord();
    }
  }, [album]);

  const OpenRecord = () => {
    return setTimeout(() => {
      setOpenClass("open-record");

      setTimeout(() => {
        setTurntableClass("opacity-1 z-[99]");
      }, 500);
    }, 100);
  };

  return (
    <>
      <TurnTable className={`${turntableClass}`}>
        {album.albumOpen && (
          <VinylPlayer className={`opacity-100 scale-x-105 ${openClass}`} />
        )}
      </TurnTable>

      <div
        className={`glass delay-500 ${
          album.albumOpen ? " opacity-100 visible" : "invisible opacity-0"
        }`}
      ></div>
      {
        <Carousel
          className={`${
            album.albumOpen ? "scale-50  blur-lg" : "scale-100"
          } transition-ease-in-out-cubic duration-200`}
          loading={loadinTracks}
          items={vinyl}
        />
      }
      {notFound ? "Não foi encontrado" : ""}
    </>
  );
}
