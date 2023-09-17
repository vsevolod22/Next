
import styles from './Main.module.scss';
import Image from 'next/image';
import Filter from '../../../img/MainPage/filterSvg';
import Search from '../Search/Search';
import Button from '../Button/Button';
import Link from 'next/link';
import VacanciesCard from '../VacanciesCard/VacanciesCard';
import man from '../../../img/MainPage/man_look_at_something.png'
import cloud from '../../../img/MainPage/blue_big_cloud.png';
import AdvCard from '../AdvCard/AdvCard';
import biz from '../../../img/MainPage/BIz.png';


const Main = () => {




    return (
        <>
            <section className={styles.search}>
                <Button className={styles.button} style={{}} text={'Войти'}></Button>
                <div className={styles.search__container}>
                    <Search placeholder={'Услуги, работа'}></Search>
                    <Button text={'Найти'}></Button>
                    <button className={styles.search__filter}>{<Filter/>}</button>
                </div>
            </section>
            <div className={styles.container}>
            <section className={styles.vacancies}>
                <div className={styles.vacancies__container}>
                <div className={styles.vacancies__cards}>
                    
                    <VacanciesCard title={'Фриланс'} text={'Модератор чатов, оператор call-центра и др.'}></VacanciesCard>
                    <VacanciesCard title={'Фриланс'} text={'Модератор чатов, оператор call-центра и др.'}></VacanciesCard>
                    <VacanciesCard title={'Фриланс'} text={'Модератор чатов, оператор call-центра и др.'}></VacanciesCard>
                    <VacanciesCard title={'Фриланс'} text={'Модератор чатов, оператор call-центра и др.'}></VacanciesCard>
                    <VacanciesCard title={'Фриланс'} text={'Модератор чатов, оператор call-центра и др.'}></VacanciesCard>
                    <VacanciesCard title={'Фриланс'} text={'Модератор чатов, оператор call-центра и др.'}></VacanciesCard>
                
                </div>
                <Link className={styles.vacancies__link} href={'/vacancies'}>ещё 30+ вакансий</Link>
                </div>
                
                
                <div className={styles.vacancies__img_container}>
                    <Image src={man} className={styles.vacancies__img} alt='search_pic'></Image>
                    <Image src={cloud} className={styles.vacancies__cloud} alt='cloud'></Image>
                </div>
            </section>
            </div>
            <div className={styles.container}>
            <section className={styles.adv}>
                <div className={styles.adv__title}>Работайте у лучших!</div>
                <div className={styles.adv__cards}>
                    <AdvCard></AdvCard>
                    <AdvCard></AdvCard>
                    <AdvCard></AdvCard>
                    <AdvCard></AdvCard>
                </div>
            </section>
            </div>
            <div className={styles.container}>
            <section className={styles.site_info}>
                <div className={styles.site_info__descr}><span>BIZ</span> — это идельный сайт для поиска любых услуг <br></br> и соискателей. Мы постарались сделать для вас удобное место,где вы можете найти, то что нужно именно вам.</div>
                <Image src={biz} alt='description' className={styles.site_info__img}></Image>
            </section>
            </div>
            
        </>
        
    )


}
export default Main



