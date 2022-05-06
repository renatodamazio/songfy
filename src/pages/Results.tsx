import React, { useEffect, useState } from "react";
import getAlbuns from "../api/getAlbuns";
import getAlbumTrack from "../api/getAlbumTrack";
import AlbumTracks from "../components/AlbumTracks";
import { useLocation } from "react-router-dom";

export default function Results(): any {
  const [albuns, setAlbuns] = useState<any>([]);
  const [albumTracks, setAlbumTracks] = useState<any>([]);
  const [albumName, setAlbumName] = useState([]);
  const location = useLocation();

  const getArtistAlbum = async () => {
    const query = location.pathname.replace("/results/", "");
    const albuns: any = await getAlbuns(query);
    setAlbuns(albuns);
  };

  const getArtistAlbumTrack = async (artist: string, album: string) => {
    const albumTracks: any = await getAlbumTrack(artist, album);
    return albumTracks;
  };

  const setAlbumTrackObject = async () => {
    const albums: any[] = [];
    const artistAlbum = albuns.album;
    try {
      for (const album of artistAlbum) {
        const tracks = await getArtistAlbumTrack(album.artist.name, album.name);
        albums.push(tracks);
      }

      setAlbumTracks(albums);
    } catch (err) {}
  };

  useEffect(() => {
    getArtistAlbum();
  }, []);

  useEffect(() => {
    getArtistAlbum();
  }, [location])

  useEffect(() => {
    if (typeof albuns === "object" && albuns?.album) {
      setAlbumName(albuns?.album);
    }
  }, [albuns]);

  useEffect(() => {
    setAlbumTrackObject();
  }, [albumName]);
  return (
    <>
      <ul>
        {albumTracks.length && albumTracks.map((album: any, key: number) => (
          <li key={key}>
            <AlbumTracks
              image={album?.image}
              artist={album?.artist}
              album={album?.name}
              tracks={album?.tracks}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
