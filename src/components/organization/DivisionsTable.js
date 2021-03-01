import { Input, Table, Radio, Select } from "antd";
import React from "react";
import axios from "axios";
import "./table.less";

export default function DivisionsTable() {
  const { useState, useEffect } = React;
  const [isLoading, setIsLoading] = useState(false);
  const [divisionsList, setDivisionsList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filterTable, setFilterTable] = useState(null);
  const [filteredColumn, setFilteredColumn] = useState("name");

  const { Option } = Select;

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
  }, []); // eslint-disable-line

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
        <div className="subdivision-row">
          <span>{row}</span>
          <img src="/images/add-green.svg" alt="" />
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

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const handleSearch = (value) => {
    if (value === "") {
      setFilterTable(null);
      return;
    }
    const filteredTable = divisionsList.filter((div) =>
      div[filteredColumn]
        ?.toString()
        ?.toLowerCase()
        ?.includes(value.toLowerCase())
    );

    setFilterTable(filteredTable);
  };

  const handleColumnSelect = (e) => setFilteredColumn(e);

  return (
    <div className="table-wrapper">
      <div className="main">
        <Radio.Group style={{ marginBottom: 30 }} defaultValue="listado">
          <Radio.Button value="listado">Listado</Radio.Button>
          <Radio.Button value="arbol">Arbol</Radio.Button>
        </Radio.Group>
        <div className="filter-div">
          <Select
            defaultValue="Columnas"
            style={{ marginRight: 10, width: "100%" }}
            onChange={handleColumnSelect}
          >
            <Option value="name">Nombre</Option>
            <Option value="parent_division">División superior</Option>
            <Option value="collaborators_amount">Colaboradores</Option>
            <Option value="level">Nivel</Option>
            <Option value="sub_divisions">Subdivisiones</Option>
            <Option value="ambassador">Embajadores</Option>
          </Select>
          <Input.Search onSearch={handleSearch} placeholder="Buscar" />
        </div>
      </div>
      <Table
        columns={tableColumns}
        dataSource={!filterTable ? divisionsList : filterTable}
        loading={isLoading}
        onChange={handleTableChange}
        pagination={pagination}
        rowKey="name"
        bordered
        rowSelection
      />
    </div>
  );
}
