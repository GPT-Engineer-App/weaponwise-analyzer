import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex h-screen bg-[#1a1a1a] text-white">
          <nav className="w-16 bg-[#2c2c2c] flex flex-col items-center py-4">
            <div className="mb-6">
              <img src="/destiny-logo.png" alt="Destiny 2 Logo" className="w-12 h-12" />
            </div>
            {navItems.map(({ title, to, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `p-2 mb-2 rounded-md hover:bg-[#3a3a3a] transition-colors ${
                    isActive ? 'bg-[#3a3a3a]' : ''
                  }`
                }
                title={title}
              >
                {icon}
              </NavLink>
            ))}
          </nav>
          <main className="flex-1 overflow-y-auto p-6">
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
