import { UserModel } from '../../dataModels/userModel';
import users from '../../data/users.json'
import usersActivity from '../../data/usersActivity.json';
import usersAverage from '../../data/usersAverage.json';
import usersPerformance from '../../data/usersPerformance.json';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Activity } from '../../components/Graphics/Activity/Activity';
import { Average } from '../../components/Graphics/Average/Average';
import { Intensity } from '../../components/Graphics/Intensity/Intensity';
import { Score } from '../../components/Graphics/Score/Score';
import { Info } from '../../components/Info/Info';
import styles from './Dashboard.module.scss';

export function Dashboard() {
  // récupère id url
  // find dans users
 const user = new UserModel(
    users.USER_MAIN_DATA[0],
    usersActivity.USER_ACTIVITY,
    usersAverage.USER_AVERAGE_SESSIONS,
    usersPerformance.USER_PERFORMANCE
  );
  // condition si session undefined ou null renvoie une page d'erreur
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.containerAllGraphs}>
          <div>
            <span className={styles.span}>
              Bonjour{' '}
              <strong className={styles.strong}>
                {user.userInfos.firstName}
              </strong>
            </span>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className={styles.containerActivity}>
            <Activity userActivity={user.sessions} />
          </div>
          <div className={styles.containerGraphs}>
            <div className={styles.containerAverage}>
              <Average
                className={styles.average}
                userAverage={user.averageSessions}
              />
            </div>
            <div className={styles.containerIntensity}>
              <Intensity
                className={styles.intensity}
                categories={user.performance.kind}
                userPerfomance={user.performance.data}
              />
            </div>
            <div className={styles.containerScore}>
              <Score className={styles.score} user={user} />
            </div>
          </div>
        </div>
        <div className={styles.containerInfos}>
          <Info calorie={user.keyData.calorieCount} />
          <Info proteine={user.keyData.proteinCount} />
          <Info glucide={user.keyData.carbohydrateCount} />
          <Info lipide={user.keyData.lipidCount} />
        </div>
      </div>
    </MainLayout>
  );
}
