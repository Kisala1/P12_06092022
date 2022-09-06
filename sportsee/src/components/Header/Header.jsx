import logo from '../../assets/logo.png';
import { Nav } from '../Buttons/Nav/Nav';
import styles from './Header.module.scss';

export function Header() {
  const contentBtns = ['Accueil', 'Profil', 'Réglage', 'Communauté'];

  return (
    <div className={styles.divContainer}>
      <div className={styles.divImg}>
        <img className={styles.img} src={logo} alt="Logo SportSee" />
      </div>
      <div>
        {contentBtns.map((content, index) => (
          <Nav content={content} key={index} />
        ))}
      </div>
    </div>
  );
}
