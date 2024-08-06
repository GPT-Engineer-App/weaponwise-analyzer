import { Home, Gun, Crosshair } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Weapons",
    to: "/weapons",
    icon: <Gun className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Perks",
    to: "/perks",
    icon: <Crosshair className="h-4 w-4" />,
    page: <Index />,
  },
];
