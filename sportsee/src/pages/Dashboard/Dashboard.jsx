import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Activity } from '../../components/Graphics/Activity/Activity';
import { Average } from '../../components/Graphics/Average/Average';
import { Score } from '../../components/Graphics/Score/Score';
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
        <div>
          <span>Bonjour</span>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        {user.id === 12 ? <Activity userActivity={activity.sessions} /> : null}

        <div className={styles.containerGraphs}>
          <div className={styles.containerAverage}>
            {user.id === 12 ? (
              <Average
                className={styles.average}
                userAverage={average.sessions}
              />
            ) : null}
          </div>
          <div className={styles.containerScore}>
            {user.id === 12 ? (
              <Score
                className={styles.score}
                categories={performance.kind}
                userPerfomance={performance.data}
              />
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
