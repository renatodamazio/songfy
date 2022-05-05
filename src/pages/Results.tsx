import React, { useEffect, useState } from "react";
import getAlbuns from "../api/getAlbuns";

export default function Results(): any {
  const [albuns, setAlbuns] = useState<any>([]);
  const [albumName, setAlbumName] = useState([]);

  const getArtistAlbum = async () => {
    const albuns: any = await getAlbuns("metallica");
    setAlbuns(albuns);
  };

  useEffect(() => {
    getArtistAlbum();
  }, []);

  useEffect(() => {
    if (typeof albuns === "object") {
      setAlbumName(albuns?.album);
    }
  }, [albuns]);
  return (
    <>
      <ul>
        {albumName.map((item: any, key: number) => (
          <li key={key}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
