import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faDrumstickBite,
  faAppleWhole,
  faBurger,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Info.module.scss';

/**
 * 
 * @param {Number} All params are numbers
 * @returns div each time there is one of the parameters, with its value
 */

export function Info({ calorie, proteine, glucide, lipide }) {
  const internationalNumberFormat = new Intl.NumberFormat('en-US');

  const displayInfo = () => {
    if (calorie) {
      return (
        <div className={styles.container}>
          <div
            className={styles.containerIcon}
            style={{ backgroundColor: 'rgba(255,0,0,0.1)' }}
          >
            <FontAwesomeIcon icon={faFire} className={styles.iconCalorie} />
          </div>
          <div className={styles.containerInfos}>
            <strong
              className={styles.strong}
            >{`${internationalNumberFormat.format(calorie)}kCal`}</strong>
            <p className={styles.p}>Calories</p>
          </div>
        </div>
      );
    } else if (proteine) {
      return (
        <div className={styles.container}>
          <div
            className={styles.containerIcon}
            style={{ backgroundColor: 'rgba(74,184,255,0.1)' }}
          >
            <FontAwesomeIcon
              icon={faDrumstickBite}
              className={styles.iconProteine}
            />
          </div>
          <div className={styles.containerInfos}>
            <strong className={styles.strong}>{`${proteine}g`} </strong>
            <p className={styles.p}>Proteines</p>
          </div>
        </div>
      );
    } else if (glucide) {
      return (
        <div className={styles.container}>
          <div
            className={styles.containerIcon}
            style={{ backgroundColor: 'rgba(253,204,12,0.1)' }}
          >
            <FontAwesomeIcon
              icon={faAppleWhole}
              className={styles.iconGlucide}
            />
          </div>
          <div className={styles.containerInfos}>
            <strong className={styles.strong}>{`${glucide}g`} </strong>
            <p className={styles.p}>Glucides</p>
          </div>
        </div>
      );
    } else if (lipide) {
      return (
        <div className={styles.container}>
          <div
            className={styles.containerIcon}
            style={{ backgroundColor: 'rgba(253,81,129,0.1)' }}
          >
            <FontAwesomeIcon icon={faBurger} className={styles.iconLipide} />
          </div>
          <div className={styles.containerInfos}>
            <strong className={styles.strong}>{`${lipide}g`} </strong>
            <p className={styles.p}>Lipides</p>
          </div>
        </div>
      );
    }
  };
  return <>{displayInfo()}</>;
}
