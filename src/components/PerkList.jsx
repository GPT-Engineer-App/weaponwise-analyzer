import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const perkData = [
  { id: 1, name: "Outlaw", description: "Precision kills greatly decrease reload time" },
  { id: 2, name: "Rampage", description: "Kills increase damage for a short time" },
  { id: 3, name: "Firefly", description: "Precision kills create an elemental damage explosion" },
  { id: 4, name: "Dragonfly", description: "Precision kills create an elemental damage explosion" },
  { id: 5, name: "Kill Clip", description: "Reloading after a kill grants increased damage" },
];

const PerkList = ({ searchTerm }) => {
  const filteredPerks = perkData.filter(perk =>
    perk.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredPerks.map(perk => (
        <Card key={perk.id} className="bg-[#2c2c2c] border-[#3a3a3a]">
          <CardHeader>
            <CardTitle className="text-[#f5c85e]">{perk.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{perk.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PerkList;
