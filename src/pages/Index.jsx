import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WeaponTypeDistribution from '../components/WeaponTypeDistribution';
import TopRatedWeapons from '../components/TopRatedWeapons';

const Index = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[#2c2c2c] border-[#3a3a3a]">
          <CardHeader>
            <CardTitle className="text-[#f5c85e]">Total Weapons</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card className="bg-[#2c2c2c] border-[#3a3a3a]">
          <CardHeader>
            <CardTitle className="text-[#f5c85e]">Total Perks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">567</p>
          </CardContent>
        </Card>
        <Card className="bg-[#2c2c2c] border-[#3a3a3a]">
          <CardHeader>
            <CardTitle className="text-[#f5c85e]">Latest Update</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Season of the Chosen</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeaponTypeDistribution />
        <TopRatedWeapons />
      </div>
    </div>
  );
};

export default Index;
