import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WeaponGrid from '../components/WeaponGrid';

const Weapons = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Weapons</h1>
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search weapons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button variant="secondary">Search</Button>
      </div>
      <WeaponGrid searchTerm={searchTerm} />
    </div>
  );
};

export default Weapons;
