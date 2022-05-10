import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
const classNames = `
rounded-md 
w-full h-20 
text-black 
font-bold 
text-3xl 
text-center 
uppercase 
border-2
border-gray
shadow-inner
transition-all
focus:border-orange
focus:shadow-orange
focus:shadow-md
shadow-sm
px-6`;

export default function Home() {
  const searchArtist = (query: string) => {
    console.log(query);
  };
  return (
    <div className="flex p-10 align-center justify-center h-screen">
      <DebounceInput
        type="search"
        placeholder="O que gostaria de ouvir ?"
        autoFocus
        debounceTimeout={300}
        onChange={(ev) => searchArtist(ev.target.value)}
        className={classNames}
      />
    </div>
  );
}
