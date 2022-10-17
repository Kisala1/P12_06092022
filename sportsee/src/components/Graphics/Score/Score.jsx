import { RadialBarChart, RadialBar, Legend } from 'recharts';
import styles from './Score.module.scss';
import PropTypes from 'prop-types';


// https://stackoverflow.com/questions/67016033/can-i-make-a-radial-bar-chart-like-this-in-rechart

/**
 * 
 * @param {object} user is a object with user information : 
 * todayScore ou score
 * @returns a graph containing the above informations 
 */

export function Score({ user }) {
  const data = [
    {
      score: 100,
      fill: '#fbfbfb',
    },
    {
      score: user.score * 100,
      fill: '#FF0000',
    },
  ];
const renderLegend = (props) => {
  const {payload} = props

  return (
    <p className={styles.p}>
      <strong
        className={styles.strong}
      >{`${payload[1].payload.score}% `}</strong>
      de votre <br /> objectif
    </p>
  );
}
  return (
    <>
      <RadialBarChart
        width={258}
        height={263}
        data={data}
        cx={150}
        cy={150}
        startAngle={80}
        endAngle={440}
        innerRadius={50}
        barSize={10}
      >
        <text x={30} y={40}>
          Score
        </text>
        <RadialBar
          fill="#fefefe"
          background
          cornerRadius={30}
          dataKey="score"
        />
        <Legend width={250} content={renderLegend} />
      </RadialBarChart>
    </>
  );
}

Score.propTypes = {
  user: PropTypes.object,
};