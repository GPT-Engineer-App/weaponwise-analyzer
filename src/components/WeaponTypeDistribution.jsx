import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Auto Rifles', count: 120 },
  { name: 'Hand Cannons', count: 150 },
  { name: 'Pulse Rifles', count: 100 },
  { name: 'Scout Rifles', count: 80 },
  { name: 'Shotguns', count: 90 },
  { name: 'Sniper Rifles', count: 70 },
];

const WeaponTypeDistribution = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Weapon Type Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#F8B700" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeaponTypeDistribution;
