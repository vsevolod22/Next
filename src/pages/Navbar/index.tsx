import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const navigation = [
  { id: 2, title: 'Соискатель', path: '/posts' },
  { id: 3, title: 'Роботадатель', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link key={1} href={'/'}><div className={styles.logo}>{'BIZ'}</div></Link>
      </div>
      <div className={styles.links}>
        <div><BasicMenu/></div>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} >
            <div className={pathname === path ? styles.active : ''}>{title}</div>
          </Link>
        ))}
          
      </div>
    </nav>
  );
};

export default Navbar;


const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);;
  const open = Boolean(anchorEl);
  const handleClick = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.town}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{display: 'inline-flex', alignItems: 'center', margin:'0 20px 0 0', padding: '0 10px', color: '#000', textAlign: 'center', fontFamily:'Roboto Condensed', fontSize: '26px', fontWeight: '400', fontStyle: 'normal', lineHeight:'normal', textDecoration: 'none', textTransform: 'capitalize'}}
      >
        Таганрог
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
        <path d="M5 4.99036L0 0.135986H10L5 4.99036Z" fill="black"/>
        </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Армавир</MenuItem>
        <MenuItem onClick={handleClose}>Ростов</MenuItem>
        <MenuItem onClick={handleClose}>Краснодар</MenuItem>
      </Menu>
    </div>
  );
}