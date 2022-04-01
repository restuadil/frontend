import styles from "./Hero.module.css"
import danang from "../Hero/danang.jpg"
function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Danang The Movie</h2>
                    <h3 className={styles.hero__genre}>Genre:  Romance, Comedy</h3>
                    <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, commodi! Eos soluta amet ipsa velit sed commodi ducimus sunt nobis?</p>
                    <button className={styles.hero__button}>WATCH</button>                
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero_image} src={danang} alt="logo" srcset="" />
                </div>
            </section>
        </div>
    );
}

export default Hero ;