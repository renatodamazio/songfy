import React from "react";

export default function Title(props: any) {
  const cleanTitle = (query: string): string => {
    let text = query.replace("/results/", "");
    text.replace("/search/", "");
    text.replace("/albuns/", "");
    text.replace(/%20{1}/gi, "");
    return text;
  };
  return (
    <h1 className="text-4xl py-6 uppercase font-bold">
      {cleanTitle(props.text)}
    </h1>
  );
}
