import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Activity } from '../../components/Graphics/Activity/Activity';
import { Average } from '../../components/Graphics/Average/Average';
import { Intensity } from '../../components/Graphics/Intensity/Intensity';
import { Score } from '../../components/Graphics/Score/Score';
import { Info } from '../../components/Info/Info';
import styles from './Dashboard.module.scss';

export function Dashboard({
  users,
  usersActivity,
  usersAverage,
  usersPerformance,
}) {
  const user = users.USER_MAIN_DATA.find((user) => user.id === 12);
  const activity = usersActivity.USER_ACTIVITY.find((el) => el.userId === 12);
  const average = usersAverage.USER_AVERAGE_SESSIONS.find(
    (el) => el.userId === 12
  );
  const performance = usersPerformance.USER_PERFORMANCE.find(
    (el) => el.userId === 12
  );
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
            {user.id === 12 ? (
              <Activity userActivity={activity.sessions} />
            ) : null}
          </div>
          <div className={styles.containerGraphs}>
            <div className={styles.containerAverage}>
              {user.id === 12 ? (
                <Average
                  className={styles.average}
                  userAverage={average.sessions}
                />
              ) : null}
            </div>
            <div className={styles.containerIntensity}>
              {user.id === 12 ? (
                <Intensity
                  className={styles.intensity}
                  categories={performance.kind}
                  userPerfomance={performance.data}
                />
              ) : null}
            </div>
            <div className={styles.containerScore}>
              {user.id === 12 ? (
                <Score className={styles.score} user={user} />
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.containerInfos} >
          <Info calorie={user.keyData.calorieCount} />
          <Info proteine={user.keyData.proteinCount} />
          <Info glucide={user.keyData.carbohydrateCount} />
          <Info lipide={user.keyData.lipidCount} />
        </div>
      </div>
    </MainLayout>
  );
}
