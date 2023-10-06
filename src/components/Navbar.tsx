import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current route location

  const menuLists = [
    {
      path: "Datatable",
      url: "/dashboard",
    },
    {
      path: "Email",
      url: "/dashboard/email",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {menuLists.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <NavigationMenuItem
                key={menu.path}
                className={`hover:bg-slaNavigationMenuLinkte-200 hover:rounded-md ${
                  isActive ? "bg-slate-300 " : ""
                }`}
              >
                <Link to={menu.url} className={navigationMenuTriggerStyle()}>
                  {menu.path}
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
