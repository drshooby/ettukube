import { UtcClock } from "./components/UtcClock";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        <p className={styles.epigraph} lang="la">
          Et tu, kube?
        </p>

        <h1 className={styles.wordmark}>ettukube</h1>

        <div className={styles.prose}>
          <p>
            This is my personal domain—solo dev, hobby projects, the sort of
            thing you tinker with when the cluster has opinions and the
            tragedies are mostly Shakespeare’s, not the load balancer’s.
          </p>
          <p>There’s nothing public to show here yet. Check back when I’ve shipped something worth the URL.</p>
        </div>

        <section className={styles.strip} aria-label="Idle channel readout">
          <div className={styles.stripRow}>
            <span className={styles.stripKey}>UTC</span>
            <UtcClock className={styles.stripValue} />
          </div>
          <div className={styles.stripRow}>
            <span className={styles.stripKey}>CHANNEL</span>
            <span className={styles.stripValue}>IDLE</span>
          </div>
          <div className={styles.stripRow}>
            <span className={styles.stripKey}>NOTE</span>
            <span className={styles.stripValue}>reserved · hobby use only</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerMono}>ettukube.com</span>
        <span className={styles.footerHint}>no cookies · no analytics · just a doorstop</span>
      </footer>
    </div>
  );
}
