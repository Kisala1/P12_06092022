import styles from './Nav.module.scss';

export function Nav({ content }) {
  return (
    <>
      <span className={styles.span}>{content}</span>
    </>
  );
}
