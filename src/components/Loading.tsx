import React, { useEffect, useState } from "react";

export default function Loading(props: any) {
  const [styles, setStyles] = useState<any>({ width: "10px", height: "10px" });

  useEffect(() => {
    switch (props.size) {
      case "small":
        setStyles({ width: "10px", height: "10px", transform: "scale(0.3)" });
        return;
      case "big":
        setStyles({ width: "80px", height: "80px" });
        return;
      default:
        setStyles({ width: "10px", height: "10px", transform: "scale(0.3)" });
    }
  }, []);

  return (
    <div className="lds-roller" style={styles}>
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
