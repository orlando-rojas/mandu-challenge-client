import { Tabs } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

export default function Organizations() {
  return (
    <OrganizationHeader
      style={{ backgroundColor: "#fff", borderBottom: "1px solid #EDE9E9" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          marginBottom: "-17px",
        }}
      >
        <h2>Organización</h2>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Divisiones" key="1"></TabPane>
          <TabPane tab="Colaboradores" key="2"></TabPane>
        </Tabs>
      </div>
      <div className="extra">
        <button> + </button>
        <button className="white">
          <img src="/images/download.svg" alt="" />
        </button>
        <button className="white">
          <img src="/images/upload.svg" alt="" />
        </button>
      </div>
    </OrganizationHeader>
  );
}

const OrganizationHeader = styled.div`
  padding: 19px 25px 0 25px;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #555155;
  display: flex;
  justify-content: space-between;

  .extra {
    display: flex;
    align-items: center;
    button {
      background-color: #1890ff;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
      border: none;
      height: 28px;
      width: 28px;
      border-radius: 2px;
      margin-left: 10px;
      color: #fff;
    }

    button.white {
      background-color: #fff;
    }
  }
`;
