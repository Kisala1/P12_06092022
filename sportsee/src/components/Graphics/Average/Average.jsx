import { LineChart, Line, XAxis, Tooltip, Legend } from 'recharts';
import styles from './Average.module.scss';

export function Average({ userAverage }) {
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className={styles.div}>
          <p className={styles.p}>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <LineChart width={400} height={400} data={userAverage}>
      <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
      <XAxis dataKey="day" stroke="#fff" />

      <Tooltip content={<CustomTooltip />} />
      <Legend
        verticalAlign="top"
        align="left"
        width={200}
        content={<div>Durée moyenne des sessions</div>}
      />
    </LineChart>
  );
}
