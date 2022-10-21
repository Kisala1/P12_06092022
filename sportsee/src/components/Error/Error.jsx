import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import styles from './Error.module.scss'

/**
 * 
 * @returns Error element 
 */

export function Error () {
    return (
      <>
        <MainLayout>
          <div className={styles.divContainer} >
            <div className={styles.div}>
              <span className={styles.span}>404</span>
              <p>Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to={'/'} className={styles.link}> Retourner sur votre dashboard</Link>
          </div>
        </MainLayout>
      </>
    );
}