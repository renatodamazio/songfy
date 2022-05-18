import React, { useEffect, useState } from "react";

export default function Cylinder(props: any) {
  const { total, className, style } = props;
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    let _items = total;
    let _totalItems: any = [];

    for (; _items > 0; _items--) {
      _totalItems.push(_items);
    }

    setItems(_totalItems);
  }, []);

  return items.map((item: any) => {
    return (
      <div
        key={item}
        className={`${className ? className : ""} cylinder`}
        style={{
          transform: `translateZ(${
            item + 0
          }px) translateX(-50%) translateY(-50%)`,
          ...style
        }}
      ></div>
    );
  });
}
