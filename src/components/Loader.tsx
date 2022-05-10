import React from "react";

export default function Loader(props:any) {
  return (
    <div className={`lds-roller ${props.className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
