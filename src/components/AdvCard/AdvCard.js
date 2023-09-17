import styles from './AdvCard.module.scss';

import logo from '../../../img/MainPage/inoLogo.png';
import Image from 'next/image';
import reco from '../../../img/MainPage/Rectangle.png'

const AdvCard = () => {
        return (
            <div className={styles.card}>
                <Image className={styles.card__logo} src={logo} alt='companyLogo'></Image>
                <div className={styles.card__descr}>
                    
                    <a href='#'>Иностудио <span><Image alt='adv' src={reco} href='rectangle'></Image></span> </a>
                    <span>13 вакансий</span>
                </div>
                <a href='#' className={styles.card__link}>Читать больше &gt;</a>
            </div>
        )
}

export default AdvCard;