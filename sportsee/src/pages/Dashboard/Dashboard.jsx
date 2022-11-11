import { useEffect, useState } from 'react';
import { UserModel } from '../../dataModels/userModel';
import { api } from '../../service/api';
import users from '../../data/users.json';
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
import { Navigate, useParams } from 'react-router-dom';

/**
 *
 * @returns Dashboard element
 */

export function Dashboard() {
  /* get the id from the url and see if it matches an id in the JSON doc */
  const [userData, setUserData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getDataFromAPI = async () => {
      const data = await api(id);
      setUserData(data);
    };

    if (process.env.REACT_APP_SOURCE === 'API') {
      setUserData([
        users.USER_MAIN_DATA.find((entry) => entry.id === parseInt(id)),
        usersActivity.USER_ACTIVITY.find(
          (entry) => entry.userId === parseInt(id)
        ),
        usersAverage.USER_AVERAGE_SESSIONS.find(
          (entry) => entry.userId === parseInt(id)
        ),
        usersPerformance.USER_PERFORMANCE.find(
          (entry) => entry.userId === parseInt(id)
        ),
      ]);
    } else {
      getDataFromAPI();
    }
  }, [id]);

  /* will display the error page when undefined */
  if (userData === undefined) {
    return <Navigate to="/error" replace={true} />;
  }

  const user = userData.length > 0 ? new UserModel(userData) : null;

  return userData.length > 0 ? (
    <MainLayout>
      <div className={styles.container}>
        <div>
          <span className={styles.span}>
            Bonjour{' '}
            <strong className={styles.strong}>
              {user.userInfos.firstName}
            </strong>
          </span>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className={styles.containerGraphsInfos}>
          <div className={styles.containerGraphs}>
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
      </div>
    </MainLayout>
  ) : (
    <p>chargement...</p>
  );
}
