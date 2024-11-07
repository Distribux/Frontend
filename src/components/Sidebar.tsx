import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Package,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  MessageCircle,
  Settings,
  HelpCircle
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const SidebarItem = ({ icon, label, href, isActive }: SidebarItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-3 py-2 text-sm transition-colors",
      "hover:bg-slate-800 rounded-md",
      isActive ? "bg-slate-800 text-white" : "text-slate-300"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar = () => {
  const currentPath = window.location.pathname;

  return (
    <aside className="top-0 left-0 w-64 h-screen bg-slate-900 text-white flex flex-col sticky">
      {/* Logo */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">DistribuX</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        <SidebarItem
          icon={<Home />}
          label="Dashboard"
          href="/"
          isActive={currentPath === '/'}
        />
        <SidebarItem
          icon={<Package />}
          label="Gestión de lotes"
          href="/lotes"
          isActive={currentPath === '/lotes'}
        />
        <SidebarItem
          icon={<ShoppingCart />}
          label="Compras"
          href="/compras"
          isActive={currentPath === '/compras'}
        />
        <SidebarItem
          icon={<TrendingUp />}
          label="Predicciones de ventas"
          href="/predicciones"
          isActive={currentPath === '/predicciones'}
        />
        <SidebarItem
          icon={<DollarSign />}
          label="Fijación de precios"
          href="/precios"
          isActive={currentPath === '/precios'}
        />
        <SidebarItem
          icon={<MessageCircle />}
          label="WhatsApp Bot"
          href="/whatsapp"
          isActive={currentPath === '/whatsapp'}
        />

        {/* Separator */}
        <div className="my-4 border-t border-slate-800" />

        <SidebarItem
          icon={<Settings />}
          label="Configuración"
          href="/configuracion"
          isActive={currentPath === '/configuracion'}
        />
        <SidebarItem
          icon={<HelpCircle />}
          label="Ayuda"
          href="/ayuda"
          isActive={currentPath === '/ayuda'}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;