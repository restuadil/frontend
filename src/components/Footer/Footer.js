import styles from "./Footer.module.css" 

function Footer() {
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}> Movie App </h2>
                <p className={styles.footer__autor}>Made by Me :)</p>
            </footer>
        </div>
    );
}

export default Footer ;