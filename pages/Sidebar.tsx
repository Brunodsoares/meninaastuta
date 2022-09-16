import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMinus,
  faGaugeMed,
  faBuilding,
  faArchive,
  faBars,
  faUtensils,
  faPerson,
  faCircleUser,
  faMoneyBill,
  faListCheck,
  faFileLines,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";


import styles from "../styles/Sidebar.module.css";
import style from '../styles/Home.module.css'

import logo from "../public/assests/logo.png";
import { NextPage } from "next";
import Navbar from "../components/Navbar";

const Sidebar: NextPage = ({ sidebarOpen, closeSidebar } :any ) => {
  const [Open, setOpen] = useState(false)
    return (
      <div className={style.container}>

         <Navbar showSidebar = {setOpen} />
        <div className={styles.sidebarOpen ? "styles.sidebar-responsive" : ""} id={styles.sidebar} style={{display: Open ? "block" : ""}} >
          <div className={styles.sidebar__title}>
            <div className={styles.sidebar__img}>
              <Image src={logo} width={150} height={150} alt="logo" />
              <h1>Menina Astuta</h1>
            </div>
    
            <i>
              <FontAwesomeIcon
                onClick={() => setOpen(false)}
                icon={faXmark}
                id="sidebarIcon"
                aria-hidden="true"
              />
            </i>
          </div>
          <div className={styles.sidebar__menu}> 
            <div className={styles.sidebar__link}> 
              <i>
                <FontAwesomeIcon icon={faMinus} />
              </i>
              <a href="#">home</a>
            </div>
            <h2>ADIMIN</h2>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faGaugeMed} />
              </i>
              <a href="#">Área administrativa</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faBuilding} />
              </i>
              <a href="#">Lojas</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faArchive} />
              </i>
              <a href="#">Produtos</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faBars} />
              </i>
              <a href="#">Categorias</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faUtensils} />
              </i>
              <a href="#">Pedidos</a>
            </div>
            <h2>PESSOAS</h2>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faPerson} />
              </i>
              <a href="#">Administradores</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faCircleUser} />
              </i>
              <a href="#">Usuários</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faMoneyBill} />
              </i>
              <a href="#">Pagamentos e custos</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faListCheck} />
              </i>
              <a href="#">A plataforma</a>
            </div>
            <div className={styles.sidebar__link}>
              <i>
                <FontAwesomeIcon icon={faFileLines} />
              </i>
              <a href="#">Politicas de privacidade</a>
            </div>
            <div className={styles.sidebar__logout}>
              <i>
                <FontAwesomeIcon icon={faPowerOff} />
              </i>
              <a href="#">Log out</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  