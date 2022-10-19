import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Text,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

export function Intensity({ userPerfomance }) {
  const getCategories = (category) => {
    switch (category) {
      case 1:
        return 'Intensité';
      case 2:
        return 'Vitesse';
      case 3:
        return 'Force';
      case 4:
        return 'Endurance';
      case 5:
        return 'Energie';
      case 6:
        return 'Cardio';

      default:
    }
  };

  const datas = userPerfomance.map((entry) => {
    return {
      value: entry.value,
      kind: getCategories(entry.kind),
    };
  });

  /* https://stackoverflow.com/questions/65447592/recharts-is-there-a-way-to-add-a-padding-between-the-chart-and-labels-for-rada */

  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 10}
      >
        {payload.value}
      </Text>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        innerRadius={10}
        outerRadius={85}
        data={datas}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={(props) => renderPolarAngleAxis(props)}
          stroke="#fff"
          tickLine={false}
          tickMargin={20}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

Intensity.propTypes = {
  userPerfomance: PropTypes.array,
};
