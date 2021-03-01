import React from "react";
import DivisionsTable from "./components/table/DivisionsTable";
import Navbar from "./components/navbar/navbar";
import Organizations from "./components/Organization";

export default function App() {
  return (
    <div>
      <Navbar />
      <Organizations />
      <DivisionsTable />
    </div>
  );
}
