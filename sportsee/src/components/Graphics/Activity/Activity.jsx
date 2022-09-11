import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export function Activity({ userActivity }) {

  function CustomTooltip({ label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="desc">{`${label}`}</p>
        </div>
      );
    }
    return null;
  }
  return (
    <BarChart
      width={1500}
      height={300}
      data={userActivity}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
      <Bar dataKey="calories" fill="#E60000" barSize={10} />
    </BarChart>
  );
}
