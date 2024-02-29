import Avatar from "@mui/material/Avatar";

import { deepPurple } from "@mui/material/colors";

import { CiWifiOn } from "react-icons/ci";

import styles from "../styles/layout.module.css";

import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerBox}>
          <div className={styles.dashboardText}>
            <p>Dashboard</p>
          </div>
          <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
            <div className={styles.headerText}>
              <p>Employee List</p>
            </div>
          </Link>
          <div className={styles.headerText}>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search ..."
          />
        </div>
        <div className={styles.headerAvatar}>
          <div>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>AD</Avatar>
          </div>
          <div className={styles.headerSVG}>
            <CiWifiOn />
          </div>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div>
          <p>Developed By Mobin Sari</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
