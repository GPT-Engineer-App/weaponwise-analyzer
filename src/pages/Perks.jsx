import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PerkList from '../components/PerkList';

const Perks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Perks</h1>
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search perks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button variant="secondary">Search</Button>
      </div>
      <PerkList searchTerm={searchTerm} />
    </div>
  );
};

export default Perks;
