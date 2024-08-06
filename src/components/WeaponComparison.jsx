import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const weaponData = {
  "Gjallarhorn": { impact: 100, range: 90, stability: 70, handling: 60, reloadSpeed: 50 },
  "The Last Word": { impact: 80, range: 40, stability: 50, handling: 90, reloadSpeed: 70 },
  "Ace of Spades": { impact: 85, range: 70, stability: 60, handling: 75, reloadSpeed: 65 },
};

const WeaponComparison = () => {
  const [weapon1, setWeapon1] = useState(Object.keys(weaponData)[0]);
  const [weapon2, setWeapon2] = useState(Object.keys(weaponData)[1]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Select onValueChange={setWeapon1} defaultValue={weapon1}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select weapon 1" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(weaponData).map((weapon) => (
              <SelectItem key={weapon} value={weapon}>{weapon}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setWeapon2} defaultValue={weapon2}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select weapon 2" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(weaponData).map((weapon) => (
              <SelectItem key={weapon} value={weapon}>{weapon}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Stat</TableHead>
            <TableHead>{weapon1}</TableHead>
            <TableHead>{weapon2}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(weaponData[weapon1]).map((stat) => (
            <TableRow key={stat}>
              <TableCell className="font-medium">{stat}</TableCell>
              <TableCell>{weaponData[weapon1][stat]}</TableCell>
              <TableCell>{weaponData[weapon2][stat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WeaponComparison;
