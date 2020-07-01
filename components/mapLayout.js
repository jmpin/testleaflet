import styles from './mapLayout.module.css'

export default function MapLayout({ children }) {
    return <div className={styles.container}>{children}</div>
}