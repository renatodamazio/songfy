import React, { useEffect, useState } from "react";
import getAlbumTrack from "../api/getAlbumTrack";

export default function Tracks(props: any) {
  const [tracks, setTracks] = useState<object>();

  const getTracks = async () => {
    if (typeof props.album.artist != "string") return false;

    const results = await getAlbumTrack(props.album.artist, props.album.name);
    setTracks(results);
  };

  useEffect(() => {
    getTracks();
  }, [props]);

  return <div>Tracks</div>;
}
