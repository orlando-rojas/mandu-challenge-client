import { Input, Table, Radio, Select } from "antd";
import React from "react";
import axios from "axios";

export default function DivisionsTable() {
  const { useState, useEffect } = React;
  const [isLoading, setIsLoading] = useState(false);
  const [divisionsList, setDivisionsList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [filterTable, setFilterTable] = useState(null);

  const handleSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  function showTotal(total) {
    return `Total colaboradores: ${total}`;
  }

  const fetchDivisions = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https://mandu-challenge.herokuapp.com/api/divisions"
    );
    setDivisionsList(response.data);
    setPagination({
      total: response.data.length,
      pageSize: 10,
      showSizeChanger: true,
      showTotal: showTotal,
      style: { position: "relative" },
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  const getFilters = (property) => {
    let parents = [...new Set(divisionsList.map((div) => div[property]))];
    return parents;
  };

  const tableColumns = [
    {
      title: "División",
      dataIndex: "name",
      key: "name",
      filters: getFilters("name").map((div) => ({
        text: div,
        value: div,
      })),

      onFilter: (value, record) => record.name === value,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "División superior",
      dataIndex: "parent_division",
      key: "parent_division",
      filters: getFilters("parent_division").map((div) => ({
        text: div,
        value: div,
      })),
      onFilter: (value, record) => record.parent_division === value,
      render: (row) => (row ? row : "-"),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Colaboradores",
      dataIndex: "collaborators_amount",
      sorter: (a, b) => a.level - b.level,
      key: "collaborators_amount",
    },
    {
      title: "Nivel",
      dataIndex: "level",
      key: "level",
      filters: getFilters("level").map((div) => ({
        text: div,
        value: div,
      })),
      onFilter: (value, record) => record.level === value,
      sorter: (a, b) => a.level - b.level,
    },
    {
      title: "Subdivisiones",
      dataIndex: "sub_divisions",
      key: "sub_divisions",
      filters: getFilters("sub_divisions").map((div) => ({
        text: div,
        value: div,
      })),
      onFilter: (value, record) => record.sub_divisions === value,
      sorter: (a, b) => a.level - b.level,
      render: (row) => (
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <span style={{ textDecoration: "underline" }}>{row}</span>
          <img
            src="/images/add-green.svg"
            alt=""
            style={{ marginLeft: 30, height: 14, width: 14 }}
          />
        </div>
      ),
    },
    {
      title: "Embajadores",
      dataIndex: "ambassador",
      key: "ambassador",
      render: (row) => (row ? row : "-"),
    },
  ];

  const rowSelection = {
    onChange: handleSelectChange,
  };

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const handleSearch = (value) => {
    const filteredTable = divisionsList.filter((o) =>
      o.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilterTable(filteredTable);
  };

  return (
    <div style={{ padding: "20px 32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Radio.Group style={{ marginBottom: 30 }} defaultValue="listado">
          <Radio.Button value="listado">Listado</Radio.Button>
          <Radio.Button value="arbol">Arbol</Radio.Button>
        </Radio.Group>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Select
            defaultValue="Columnas"
            style={{ marginRight: 10, width: "100%" }}
          ></Select>
          <Input.Search onSearch={handleSearch} placeholder="Buscar" />
        </div>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={tableColumns}
        dataSource={!filterTable ? divisionsList : filterTable}
        loading={isLoading}
        onChange={handleTableChange}
        pagination={pagination}
        rowKey="name"
        bordered
      />
    </div>
  );
}
