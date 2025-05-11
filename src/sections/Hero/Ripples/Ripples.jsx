// backgrounds
import darkBG from '../../../assets/bg-dark.jpg';
import lightBG from '../../../assets/okhema.png';

import styles from './Ripples.module.css';

// get theme
import { useTheme } from '../../../common/ThemeContext';

function Ripples() {

    // align BG to theme
    const { theme } = useTheme();
    const background = theme === 'light' ? lightBG : darkBG;

    return (
        <div className={styles.ripples}>
            <a><img src={background}></img></a>
        </div>
    )
}

export default Ripples