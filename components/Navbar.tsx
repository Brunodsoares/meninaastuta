import React, { useState } from "react";
import Image from "next/image";

import { faBars, faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Navbar.module.css";

const Navbar = ({ sidebarOpen, openSidebar }: any) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_icon} onClick={openSidebar} >
        <i>
          <FontAwesomeIcon icon={faBars} aria-hidden={true} />
        </i>
      </div>

      <div className={styles.navbar__left}>
        <a href="#">Produtos</a>
        <a href="#">Usuarios</a>
        <a href="#" className={styles.active_link}>
          Admin
        </a>
      </div>

      <div className={styles.navbar__right}>
        <a href="#">
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </a>

        <a href="#">
          <i>
            <FontAwesomeIcon icon={faClock} />
          </i>
        </a>

        <a href="#">
          <i>
            <FontAwesomeIcon icon={faClock} />
          </i>
        </a>
     
      </div>
    </nav>
  );
};

export default Navbar;
