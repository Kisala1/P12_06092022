import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className={styles.divTooltip}>
          <p className={styles.p}>{`${payload[0].value}g`}</p>
          <p className={styles.p}>{` ${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  }
  function CustomLegend() {
    return (
      <ul className={styles.ul}>
        <li className={styles.liBlack}>Poids (kg)</li>
        <li className={styles.liRed}>Calories brûlées (Kcal)</li>
      </ul>
    );
  }
  return (
    <BarChart
      width={1100}
      height={300}
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

      <XAxis tickMargin={20} tickLine={false} />
      <YAxis
        orientation="right"
        tickMargin={20}
        axisLine={false}
        tickLine={false}
        tickCount={3}
      />
      <Tooltip offset={20} content={<CustomTooltip />} />
      <Legend content={CustomLegend} verticalAlign="top" />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        barSize={10}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        barSize={10}
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
}

Activity.propTypes = {
  userActivity: PropTypes.array,
};
