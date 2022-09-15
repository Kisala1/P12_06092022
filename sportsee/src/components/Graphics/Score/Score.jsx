import { RadialBarChart, RadialBar } from 'recharts';

// https://stackoverflow.com/questions/67016033/can-i-make-a-radial-bar-chart-like-this-in-rechart

export function Score({ user }) {
  return (
    <>
      <RadialBarChart width={400} height={400} data={user}>
        <text x={50} y={50}>
          Score
        </text>
        <text
          x={30}
          y={33}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          89
        </text>
        <RadialBar
          minAngle={15}
          cornerRadius={30}
          background
          fill="#FF0000"
          dataKey="todayScore"
        />
      </RadialBarChart>
    </>
  );
}
