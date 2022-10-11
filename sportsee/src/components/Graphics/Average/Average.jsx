import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import styles from './Average.module.scss';
import PropTypes from 'prop-types';

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
    <LineChart width={258} height={263} data={userAverage}>
      {/* Text à mettre dans une div, impossible de changer la couleur */}
      <text className={styles.text} x={20} y={30}>
        Durée moyenne des sessions
      </text>
      <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={false} />
      <XAxis dataKey="day" stroke="#fff" />

      <Tooltip content={<CustomTooltip />} cursor={false}  />
    </LineChart>
  );
}

Average.propTypes = {
  userAverage: PropTypes.array
}
