import React, { useState } from 'react'
import type { NextPage } from 'next'

import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

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
    <div className={styles.container}>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />    
    </div>
  );
}

export default Home
