import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer__container}>
                <footer className={styles.footer}>
                    <Link href={'/inostudio'}>Мы работаем с Иностудио</Link>
                    <Link href={'/confident'}>Политика конфиденциальности </Link>
                    <Link href={'/services'}>Все услуги</Link>
                    <Link href={'/aboutUs'}>О нас</Link>
                </footer>
            </div>
        </div>
    )
}
export default Footer;


