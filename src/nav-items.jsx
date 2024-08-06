import { Home, Sword, Crosshair, BarChart2, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import Weapons from "./pages/Weapons.jsx";
import Perks from "./pages/Perks.jsx";
import Analytics from "./pages/Analytics.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-6 w-6" />,
    page: <Index />,
  },
  {
    title: "Weapons",
    to: "/weapons",
    icon: <Sword className="h-6 w-6" />,
    page: <Weapons />,
  },
  {
    title: "Perks",
    to: "/perks",
    icon: <Crosshair className="h-6 w-6" />,
    page: <Perks />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-6 w-6" />,
    page: <Analytics />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-6 w-6" />,
    page: <Index />,
  },
];
