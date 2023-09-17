
import styles from './Button.module.scss'





const Button = (props) => {

    return (
        <button style={props.style} className={styles.button + ' ' + props.className}  onClick={props.Click}>{props.text}</button>
    )

}
export default Button