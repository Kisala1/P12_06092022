import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';
import styles from './Average.module.scss';
import PropTypes from 'prop-types';

/**
 *
 * @param {array} userAverage is a array with sessions informations :
 * day and sessionLength
 * @returns a graph containing the above informations
 */

export function Average({ userAverage }) {
  const getDays = (day) => {
    switch (day) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';

      default:
    }
  };

  const datas = userAverage.map((entry) => {
    return {
      sessionLength: entry.sessionLength,
      day: getDays(entry.day),
    };
  });

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

  const CustomCursor = (props) => {
    const { points } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];
    return (
      <Rectangle
        fill="rgba(100, 0, 0, 0.2)"
        x={x}
        y={y1}
        width={258}
        height={263}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={258} height={263} data={datas}>
        <text x={30} y={30} fill="rgb(255,255,255, 0.5)">
          Durée moyenne des
        </text>
        <text x={30} y={50} fill="rgb(255,255,255, 0.5)">
          sessions
        </text>
        <XAxis
          dataKey="day"
          stroke="rgb(255,255,255, 0.5)"
          axisLine={false}
          tickLine={false}
          tickMargin={-10}
          padding={{ left: 15, right: 15 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="basis"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ stroke: 'rgb(255,255,255, 0.3)', strokeWidth: 10, r: 5 }}
          stroke="#fff"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

Average.propTypes = {
  userAverage: PropTypes.array,
};
