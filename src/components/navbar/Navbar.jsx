import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="/logo.png" alt="" />
          <span>Taiwan Interest</span>
        </Link>
        <Link to={"/"}>首頁</Link>
        <Link to={"#"}>列表</Link>
        <Link to={"#"}>關於</Link>
        <Link to={"#"}>聯絡</Link>
      </div>
      <div className="right">
        <Link to={"#"}>登入</Link>
        <Link to={"#"} className="register">
          註冊
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to={"/"}>首頁</Link>
          <Link to={"#"}>列表</Link>
          <Link to={"#"}>關於</Link>
          <Link to={"#"}>聯絡</Link>
          <Link to={"#"}>登入</Link>
          <Link to={"#"}>註冊</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
