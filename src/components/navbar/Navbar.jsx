import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Taiwan Interest</span>
        </a>
        <a href="/">首頁</a>
        <a href="/">列表</a>
        <a href="/">關於</a>
        <a href="/">聯絡</a>
      </div>
      <div className="right">
        <a href="/">登入</a>
        <a href="/" className="register">
          註冊
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">首頁</a>
          <a href="/">列表</a>
          <a href="/">關於</a>
          <a href="/">聯絡</a>
          <a href="/">登入</a>
          <a href="/">註冊</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
