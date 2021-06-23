import React from 'react'
import styles from '../../styles/header.module.scss'

export default function Header() {
    return (
        <div className={styles.navbarbase}>

            <nav className={styles.navbar}>
                <ul className={styles.navbarnav}>
                    <li>
                        <a href="#" className={styles.title}>Clinify Blog</a>
                    </li>
                    <div className={styles.namegroup}>
                        <li>
                            <a href="#" className={styles.title2}>Categories</a>
                        </li>
                        <li>
                            <a href="#" className={styles.title2}>About</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
