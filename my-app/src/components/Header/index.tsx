import styles from './styles.module.scss';
import logoImg from '../../assets/logo.png'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logoImg} alt="delfosim" />
                <nav>
                    <a>Home</a>
                </nav>

                <input placeholder='Search...'></input>
            </div>
        </header>
    );
}