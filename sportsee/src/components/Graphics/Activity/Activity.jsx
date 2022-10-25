import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './Activity.module.scss';
import PropTypes from 'prop-types';

/**
 *
 * @param {array} userActivity is a array with sessions informations :
 * day, kilogram and calories
 * @returns a graph containing the above informations
 */

export function Activity({ userActivity }) {
  /* allows you to access the data used in the graph (payload) and return the data  */

  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className={styles.divTooltip}>
          <p className={styles.p}>{`${payload[0].value}g`}</p>
          <p className={styles.p}>{` ${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  }
  function CustomLegend() {
    return (
      <ul className={styles.ul}>
        <li className={styles.liBlack}>Poids (kg)</li>
        <li className={styles.liRed}>Calories brûlées (kCal)</li>
      </ul>
    );
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={userActivity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <text x={50} y={50}>
          Activité quotidienne
        </text>

        <XAxis tickLine={false} tickMargin={20} />
        <YAxis
          orientation="right"
          tickCount={3}
          axisLine={false}
          tickLine={false}
          tickMargin={20}
        />
        <Tooltip offset={20} content={<CustomTooltip />} />
        <Legend verticalAlign="top" content={CustomLegend} />
        <Bar
          dataKey="kilogram"
          barSize={10}
          fill="#282D30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          barSize={10}
          fill="#E60000"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

Activity.propTypes = {
  userActivity: PropTypes.array,
};
