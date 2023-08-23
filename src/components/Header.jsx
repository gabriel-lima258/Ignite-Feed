import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

export function Header(props) {

    return (
      <header className={styles.header}>
        <img src={igniteLogo} alt="logo ignite" />
        <strong>Ignite Feed</strong>
      </header>
    )
  }