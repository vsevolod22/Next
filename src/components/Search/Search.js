


import styles from './Search.module.scss'



const Search = (props) => {
    return (
        <input className={styles.search__input} placeholder={props.placeholder}></input>
    )
}
export default Search