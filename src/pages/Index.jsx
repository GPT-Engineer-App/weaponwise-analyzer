import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeaponTypeDistribution from '../components/WeaponTypeDistribution';
import TopRatedWeapons from '../components/TopRatedWeapons';
import WeaponComparison from '../components/WeaponComparison';
import WeaponStats from '../components/WeaponStats';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-[#F8B700]">Destiny 2 Weapon Analysis</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="flex gap-4 mb-6">
          <Input
            type="text"
            placeholder="Search weapons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button variant="outline"><Search className="mr-2 h-4 w-4" /> Search</Button>
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="perks">Perks</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WeaponTypeDistribution />
              <TopRatedWeapons />
            </div>
          </TabsContent>
          <TabsContent value="compare">
            <WeaponComparison />
          </TabsContent>
          <TabsContent value="stats">
            <WeaponStats />
          </TabsContent>
          <TabsContent value="perks">
            <h2 className="text-xl font-semibold mb-4">Perks Analysis</h2>
            <p>Perks analysis content will be implemented here.</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
