import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import styles from './Activity.module.scss';

export function Activity({ userActivity }) {
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
        <li className={styles.liBlack}>Poids (g)</li>
        <li className={styles.liRed}>Calories brûlées (Kcal)</li>
      </ul>
    );
  }
  return (
    <BarChart
      width={1500}
      height={400}
      data={userActivity}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} />
      <text x={50} y={50}>
        Activité quotidienne
      </text>
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip offset={20} content={<CustomTooltip />} />
      <Legend content={CustomLegend} verticalAlign="top" />
      <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
      <Bar dataKey="calories" fill="#E60000" barSize={10} />
    </BarChart>
  );
}