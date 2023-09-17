import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.scss'
import Navbar  from '../Navbar'

const Header = () => {
    return (
    <header className={styles.header}>
        <Navbar/>
    </header>
    )
    
}
export default Header;