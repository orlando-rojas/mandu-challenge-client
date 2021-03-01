import "./navbar.less";

export default function Navbar() {
  return (
    <div className="header">
      <div className="nav-left">
        <img src="/images/mandu-white.svg" alt="" />
        <ul className="nav-items-list">
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
    </div>
  );
}

function AdminAvatar() {
  return (
    <>
      <div className="admin-circle">A</div>
      <div className="admin-name">
        Administrador
        <img src="/images/down.svg" className="down-arrow" alt="" />
      </div>
    </>
  );
}
