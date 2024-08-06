import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex h-screen bg-gray-900 text-white">
          <nav className="w-64 bg-gray-800 p-4">
            <h1 className="text-2xl font-bold mb-6 text-[#F8B700]">D2 Weapon Analysis</h1>
            <ul className="space-y-2">
              {navItems.map(({ title, to, icon }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center p-2 rounded hover:bg-gray-700">
                    {icon}
                    <span className="ml-2">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main className="flex-1 overflow-y-auto">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
