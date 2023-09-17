import React, { useState } from "react";
import styles from './styles.module.scss';
import Header from '../pages/Header/index'
import Footer from '../components/Footer/Footer';


interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
}) => {
  return (
    <div>
        <Header/>
        <div>
          <main>{children}</main>
        </div>
        <Footer/>
    </div>
  );
};

export default Layout;
