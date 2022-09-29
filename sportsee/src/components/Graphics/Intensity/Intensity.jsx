import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

export function Intensity({ userPerfomance }) {
  // const matchCategory = () => {
  //   if (userPerfomance.kind.find((el) => el === categories.kind)) {
  //     console.log('yes');
  //   }
  // };
  // matchCategory()

  // const qsd = () => {
  //   for (const [key, value] of Object.entries(userPerfomance)) {
      // console.log(key);
      // console.log(value.value);
  //   }
  // };

  // qsd();

  const data = [
    {
      value: 80,
      kind: 'cardio',
    },
    {
      value: 120,
      kind: 'energy',
    },
    {
      value: 140,
      kind: 'endurance',
    },
    {
      value: 50,
      kind: 'strength',
    },
    {
      value: 200,
      kind: 'speed',
    },
    {
      value: 90,
      kind: 'intensity',
    },
  ];

  return (
    <>
      <RadarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        outerRadius="50%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="#fff" />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
}
