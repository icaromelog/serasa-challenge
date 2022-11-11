import Image from 'next/image'
import styles from '../../shared/styles/modules/header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src="/assets/serasa-logo-full.svg" alt="Logo Serasa" width={100} height={100} />
        </header>
    )
}