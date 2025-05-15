import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === "light" ? sun : moon;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.colorMode}
                    src={themeIcon}
                    alt="Color Mode"
                    title="Switch Themes"
                    onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h2 className={styles.intro}>SPD Priority System</h2>
                <h1>Star Rail SPD Simulator</h1>
                <p className={styles.description}>
                    Which of your characters act first in a battle? This tool allows you to simulate different SPDs to see who comes first to take action in your team. <br/><br/>
                    The higher your SPD, the faster your ally will act. High SPD will consider them to come first in action.
                    <br/><br/>
                    Click 'Simulate' to start or scroll for more details.
                </p>
            </div>
        </section>
    );
}

export default Hero;
