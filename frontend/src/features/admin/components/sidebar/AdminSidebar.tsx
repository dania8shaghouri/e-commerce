import {
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    icon: FiGrid,
    path: "/admin/dashboard",
  },

  {
    label: "Products",
    icon: FiPackage,
    path: "/admin/products",
  },

  {
    label: "Orders",
    icon: FiShoppingCart,
    path: "/admin/orders",
  },

  {
    label: "Users",
    icon: FiUsers,
    path: "/admin/users",
  },

  {
    label: "Analytics",
    icon: FiBarChart2,
    path: "/admin/analytics",
  },

  {
    label: "Settings",
    icon: FiSettings,
    path: "/admin/settings",
  },
];

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-sidebar bg-sidebar border-r border-slate-800">
      <div className="flex h-topbar items-center px-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white">
          Admin Panel
        </h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-xl px-4 py-3
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-slate-300 hover:bg-sidebarHover hover:text-white"
                    }
                  `
                  }
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;