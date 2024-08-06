import WeaponTypeDistribution from '../components/WeaponTypeDistribution';
import TopRatedWeapons from '../components/TopRatedWeapons';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeaponTypeDistribution />
        <TopRatedWeapons />
      </div>
    </div>
  );
};

export default Analytics;
