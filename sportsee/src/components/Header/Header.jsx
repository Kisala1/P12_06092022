import logo from '../../assets/logo.png';
import { Nav } from '../Buttons/Nav/Nav';
import { NavIcon } from '../Buttons/NavIcon/NavIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonSwimming,
  faPersonBiking,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import icon from '../../assets/icon.png';
import styles from './Header.module.scss';

export function Header() {
  const contentBtns = ['Accueil', 'Profil', 'Réglage', 'Communauté'];

  const icons = [
    icon,
    <FontAwesomeIcon icon={faPersonSwimming} className={styles.icon} />,
    <FontAwesomeIcon icon={faPersonBiking} className={styles.icon} />,
    <FontAwesomeIcon icon={faDumbbell} className={styles.icon} />,
  ];

  return (
    <>
      <div className={styles.divContainerNav1}>
        <div className={styles.divImgNav1}>
          <img className={styles.img} src={logo} alt="Logo SportSee" />
        </div>
        <div>
          {contentBtns.map((content, index) => (
            <Nav content={content} key={index} />
          ))}
        </div>
      </div>
      <div className={styles.divContainerNav2}>
        <div>
          {icons.map((icon, index) =>
            typeof icon === 'string' ? (
              <div className={styles.divImgNav2} key={index}>
                <img src={icon} alt="icon" className={styles.img} />
              </div>
            ) : (
              <div className={styles.divIcon} key={index}>
                <NavIcon icon={icon} />
              </div>
            )
          )}
        </div>
        <div>
          <span className={styles.span}>Copiryght, SportSee 2020</span>
        </div>
      </div>
    </>
  );
}
