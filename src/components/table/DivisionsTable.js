import { Table } from "antd";
import React from "react";
import { tableColumns } from "./tableConfig";

export default function DivisionsTable() {
  const { useState, useEffect } = React;
  const [isLoading, setIsLoading] = useState(false);
  const [divisionsList, setDivisionsList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  console.log(divisionsList);

  const handleSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const customFetch = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://mandu-challenge.herokuapp.com/api/divisions"
    );
    console.log("response.results", response);
    setDivisionsList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    customFetch({});
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={tableColumns}
        //dataSource={divisionsList}
        loading={isLoading}
        onChange={handleTableChange}
        pagination={pagination}
        rowKey="email"
      />
    </div>
  );
}
