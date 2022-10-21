import styles from './NavIcon.module.scss';

/**
 *
 * @param {icon} icon.png import in Header.jsx
 * @returns div style element containing icon for left navigation
 */

export function NavIcon({ icon }) {
  return <div className={styles.div}>{icon}</div>;
}
