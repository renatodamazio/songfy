import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlayerBar(props:any) {
  const tracks = useSelector((state: any) => state.tracks);
  useEffect(() => {
  }, []);

  return <div>PlayerBar</div>;
}
