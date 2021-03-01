import { Tabs } from "antd";
import DivisionsTable from "./DivisionsTable";
import "./organization.less";

const { TabPane } = Tabs;

export default function Organizations() {
  return (
    <div className="organization-header">
      <div className="tabs-wrapper">
        <h2>Organización</h2>
        <div className="extra">
          <button> + </button>
          <button className="white">
            <img src="/images/download.svg" alt="" />
          </button>
          <button className="white">
            <img src="/images/upload.svg" alt="" />
          </button>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Divisiones" key="1">
            <DivisionsTable />
          </TabPane>
          <TabPane tab="Colaboradores" key="2"></TabPane>
        </Tabs>
      </div>
    </div>
  );
}
