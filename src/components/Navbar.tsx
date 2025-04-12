
import { Home, BookOpen, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type NavbarProps = {
  activeTab: string;
  onChangeTab: (tab: string) => void;
};

const Navbar = ({ activeTab, onChangeTab }: NavbarProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "recipes", label: "Recipes", icon: BookOpen },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "profile", label: "Profile", icon: User, route: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-10">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          const buttonContent = (
            <>
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </>
          );
          
          return item.route ? (
            <Link to={item.route} key={item.id}>
              <Button
                variant="ghost"
                className={`flex flex-col items-center py-1 h-auto ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {buttonContent}
              </Button>
            </Link>
          ) : (
            <Button
              key={item.id}
              variant="ghost"
              className={`flex flex-col items-center py-1 h-auto ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => onChangeTab(item.id)}
            >
              {buttonContent}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
