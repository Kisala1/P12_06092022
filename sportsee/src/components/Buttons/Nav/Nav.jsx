import styles from './Nav.module.scss';

/**
 * 
 * @param {Array} array containing strings
 * @returns span style element for top navigation
 */

export function Nav({ content }) {
  return (
    <>
      <span className={styles.span}>{content}</span>
    </>
  );
}
