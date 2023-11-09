import React from "react";
import { DataTableDemo } from "@/components/Table";

const TablePage = () => {
  return (
    <>
      <span className="font-bold text-4xl">Table Page</span>
      <h1 className="font-bold text-2xl items-center my-6">Billing Table</h1>
      <DataTableDemo />
    </>
  );
};

export default TablePage;
