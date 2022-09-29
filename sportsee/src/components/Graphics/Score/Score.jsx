import { RadialBarChart, RadialBar, Legend } from 'recharts';

// https://stackoverflow.com/questions/67016033/can-i-make-a-radial-bar-chart-like-this-in-rechart

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
    <p>
      <strong>{`${payload[1].payload.score}% `}</strong>
      de votre objectif
    </p>
  );
}
  return (
    <>
      <RadialBarChart
        innerRadius={50}
        cx={150}
        cy={150}
        width={400}
        height={400}
        barSize={10}
        data={data}
      >
        <text x={30} y={40} >
          Score
        </text>
        <Legend align="right" verticalAlign="middle" content={renderLegend} />
        <RadialBar
          minAngle={15}
          cornerRadius={30}
          background
          fill="#fefefe"
          dataKey="score"
        />
      </RadialBarChart>
    </>
  );
}
