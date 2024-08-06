import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const topWeapons = [
  { name: "Gjallarhorn", type: "Rocket Launcher", rating: 4.9 },
  { name: "The Last Word", type: "Hand Cannon", rating: 4.8 },
  { name: "Ace of Spades", type: "Hand Cannon", rating: 4.7 },
  { name: "Thorn", type: "Hand Cannon", rating: 4.6 },
  { name: "Fatebringer", type: "Hand Cannon", rating: 4.5 },
];

const TopRatedWeapons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Rated Weapons</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topWeapons.map((weapon, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{weapon.name} ({weapon.type})</span>
              <span className="text-[#F8B700] font-semibold">{weapon.rating}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopRatedWeapons;
