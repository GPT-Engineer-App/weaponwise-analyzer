import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weaponData = [
  { id: 1, name: "Gjallarhorn", type: "Rocket Launcher", power: 1000, rarity: "Exotic" },
  { id: 2, name: "The Last Word", type: "Hand Cannon", power: 950, rarity: "Exotic" },
  { id: 3, name: "Ace of Spades", type: "Hand Cannon", power: 950, rarity: "Exotic" },
  { id: 4, name: "Thorn", type: "Hand Cannon", power: 950, rarity: "Exotic" },
  { id: 5, name: "Fatebringer", type: "Hand Cannon", power: 900, rarity: "Legendary" },
];

const WeaponGrid = ({ searchTerm }) => {
  const filteredWeapons = weaponData.filter(weapon =>
    weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredWeapons.map(weapon => (
        <Card key={weapon.id} className="bg-[#2c2c2c] border-[#3a3a3a]">
          <CardHeader>
            <CardTitle className="text-[#f5c85e]">{weapon.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Type: {weapon.type}</p>
            <p>Power: {weapon.power}</p>
            <p>Rarity: {weapon.rarity}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WeaponGrid;
