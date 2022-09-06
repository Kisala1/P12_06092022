import styles from './NavIcon.module.scss';

export function NavIcon({ icon }) {
  return <div className={styles.div}>{icon}</div>;
}
