import { getSiteLinks } from "@/config/site-links";
import styles from "./SiteNav.module.css";

type SiteNavProps = {
  className?: string;
};

export function SiteNav({ className }: SiteNavProps) {
  const links = getSiteLinks();

  return (
    <nav className={[styles.nav, className].filter(Boolean).join(" ")} aria-label="Site">
      <h2 className={styles.title}>Sitemap</h2>
      <ul className={styles.list}>
        {links.map((item) => (
          <li key={item.href}>
            <a className={styles.link} href={item.href} rel="noopener noreferrer">
              {item.label}
            </a>
            {item.description ? (
              <span className={styles.description}>{item.description}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
