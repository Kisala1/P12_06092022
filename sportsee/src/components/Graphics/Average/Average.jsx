import { LineChart, Line, XAxis, Tooltip } from 'recharts';
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
      {/* Text à mettre dans une div, impossible de changer la couleur */}
      <text className={styles.text} x={20} y={30}>
        Durée moyenne des sessions
      </text>
      <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
      <XAxis dataKey="day" stroke="#fff" />

      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}
