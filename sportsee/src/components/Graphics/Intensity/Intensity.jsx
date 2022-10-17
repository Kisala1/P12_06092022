import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';


export function Intensity({ userPerfomance }) {

const getCategories = 
(category) => {
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

const datas =  userPerfomance.map(entry => {
  return  {
    value: entry.value, 
    kind: getCategories(entry.kind)
  	}
  })

  return (
    <>
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
        <PolarAngleAxis dataKey="kind" stroke="#fff" tickLine={false} />
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

Intensity.propTypes = {
  userPerfomance: PropTypes.array,
};