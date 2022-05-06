import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "../../store/reducers/musicTrackReducer";

export default function PlayerBar() {
  const dispatch = useDispatch();
  const tracks = useSelector((state: any) => state.tracks);

  useEffect(() => {
    dispatch(
      setTrack({
        name: "iron maiden",
        timer: "00:00",
      })
    );

    dispatch(
      setTrack({
        name: "metallica maiden",
        timer: "00:00",
      })
    );
  }, []);

  return <div>PlayerBar</div>;
}
