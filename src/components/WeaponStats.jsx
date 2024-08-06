import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const weaponData = {
  "Gjallarhorn": { impact: 100, range: 90, stability: 70, handling: 60, reloadSpeed: 50 },
  "The Last Word": { impact: 80, range: 40, stability: 50, handling: 90, reloadSpeed: 70 },
  "Ace of Spades": { impact: 85, range: 70, stability: 60, handling: 75, reloadSpeed: 65 },
};

const WeaponStats = () => {
  const [selectedWeapon, setSelectedWeapon] = useState(Object.keys(weaponData)[0]);

  return (
    <div className="space-y-4">
      <Select onValueChange={setSelectedWeapon} defaultValue={selectedWeapon}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a weapon" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(weaponData).map((weapon) => (
            <SelectItem key={weapon} value={weapon}>{weapon}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="space-y-2">
        {Object.entries(weaponData[selectedWeapon]).map(([stat, value]) => (
          <div key={stat} className="flex items-center gap-2">
            <span className="w-24 font-medium">{stat}</span>
            <Progress value={value} className="w-full" />
            <span className="w-8 text-right">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaponStats;
