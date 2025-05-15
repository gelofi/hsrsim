import styles from './Usage.module.css';

function Usage() {
    return (
    <section id="usage" className={styles.container}>
        <div className={styles.info}>
            <h1>Usage</h1>
            <p className={styles.description}><br/>
                SPD is a stat that determines characters' Action Value. Characters' SPDs are usually around 100-160, depending on your build. <br/><br/>
                We can calculate the action value with the formula: 10000 / SPD <br/><br/>
                In this game, high SPD characters are a PRIORITY in taking action.<br/>
                High SPD results to low AV.<br/>
                The lower the Action Value is, the faster the character arrives in the queue.
            </p>
        </div>
        </section>
  )
}

export default Usage;
