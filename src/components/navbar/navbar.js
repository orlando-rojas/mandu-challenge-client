import styled from "styled-components";

export default function Navbar() {
  return (
    <Header>
      <div className="nav-left">
        <img src="/images/mandu-white.svg" alt="" />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            alignItems: "center",
            marginBottom: 0,
          }}
        >
          <li>Dashboard</li>
          <li className="active">Organización</li>
          <li>
            Modelos
            <img src="/images/down.svg" className="down-arrow" alt="" />
          </li>
          <li>
            Seguimiento
            <img src="/images/down.svg" className="down-arrow" alt="" />
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="icons">
          <img src="/images/bag.svg" alt="" />
          <img src="/images/question.svg" alt="" className="center-icon" />
          <img src="/images/notification.svg" alt="" />
        </div>
        <AdminAvatar />
        <img src="/images/mandu.svg" alt="" />
      </div>
    </Header>
  );
}

function AdminAvatar() {
  return (
    <>
      <AdminCircle>A</AdminCircle>
      <AdminName>
        Administrador
        <img src="/images/down.svg" className="down-arrow" alt="" />
      </AdminName>
    </>
  );
}

const AdminName = styled.h2`
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
  margin-right: 30px;

  .down-arrow {
    margin-left: 20px;
    margin-bottom: 5px;
  }
`;

const AdminCircle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #e58d8e;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  color: #ffffff;
  margin-right: 10px;
`;

const Header = styled.header`
  background: linear-gradient(
      270deg,
      #56a7f2 27.97%,
      rgba(255, 255, 255, 0) 83.44%
    ),
    #2e52f8;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.15);
  height: 55px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;

  .nav-right {
    display: flex;
    align-items: center;
    font-weight: normal;

    .icons {
      .center-icon {
        padding: 0 12px;
        border-left: 0.75px solid rgba(0, 0, 0, 0.05);
        border-right: 0.75px solid rgba(0, 0, 0, 0.05);
        margin: 0;
      }

      img:nth-child(1) {
        margin-right: 15px;
      }

      img:nth-child(3) {
        margin-left: 15px;
        margin-right: 25px;
      }
    }
  }
  .nav-left {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    li {
      margin-left: 20px;
      color: #fff;
      text-decoration: none;

      .down-arrow {
        margin-left: 5px;
        margin-bottom: 5px;
      }
    }

    .active {
      color: #fff;
      background-color: #ffffff1a;
      padding: 10px;
      border-radius: 4px;
    }
  }
`;
