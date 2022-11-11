
import styles from '../../shared/styles/modules/card.module.scss'

export default function Cards(props) {
    return (
        <div className={`${styles.card} ${styles[props.size]} ${props.align}`}>
            {props.children}
        </div>
    )
}