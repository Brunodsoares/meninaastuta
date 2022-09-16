import React, { useState } from 'react'
import type { NextPage } from 'next'

import Sidebar from './Sidebar'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'


import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    < LandingPage />
    // <div className={styles.container}>
    //   {sidebarOpen == true ? }
    //   <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    //   <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />    
    // </div>
  );
}

export default Home
