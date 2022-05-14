import React from "react";
import Table from "./Table";
export default function BaseTurnTable() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-96 perspective-100">
      <Table></Table>
    </div>
  );
}
