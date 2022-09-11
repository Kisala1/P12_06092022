import { NavIcon } from '../Buttons/NavIcon/NavIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonSwimming,
  faPersonBiking,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import icon from '../../assets/icon.png';
import styles from './Nav.module.scss';

export function Nav() {
  const icons = [
    icon,
    <FontAwesomeIcon icon={faPersonSwimming} className={styles.icon} />,
    <FontAwesomeIcon icon={faPersonBiking} className={styles.icon} />,
    <FontAwesomeIcon icon={faDumbbell} className={styles.icon} />,
  ];

  return (
    <div className={styles.divContainer}>
      <div>
        {icons.map((icon, index) =>
          typeof icon === 'string' ? (
            <div className={styles.divImg} key={index}>
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
  );
}
