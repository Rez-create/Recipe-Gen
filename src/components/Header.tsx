
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, Search, LogOut, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

type HeaderProps = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
  onSearch: (query: string) => void;
};

const Header = ({ toggleTheme, isDarkTheme, onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleLogout = () => {
    logout();
    toast({
      description: "You have been logged out",
    });
  };

  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            Recipe<span className="text-secondary">Gen</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {user && (
            <div className="flex items-center mr-2">
              <div className="flex items-center gap-1 border rounded-full px-2 py-1 text-sm bg-muted/50">
                <User size={14} />
                <span className="max-w-[100px] truncate">
                  {(user.name ? user.name.charAt(0).toUpperCase() : "") || (user.email ? user.email.charAt(0).toUpperCase() : "")}
                </span>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          {user && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              aria-label="Logout"
            >
              <LogOut size={20} />
            </Button>
          )}
        </div>
      </div>
      
      <form onSubmit={handleSearch} className="relative mb-4">
        <Input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-search pr-10"
        />
        <Button 
          type="submit" 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Search size={18} className="text-muted-foreground" />
        </Button>
      </form>
      
      <Tabs defaultValue="all">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
          <TabsTrigger value="vegetarian" className="rounded-full">Vegetarian</TabsTrigger>
          <TabsTrigger value="vegan" className="rounded-full">Vegan</TabsTrigger>
          {!isMobile && (
            <>
              <TabsTrigger value="gluten-free" className="rounded-full">Gluten-Free</TabsTrigger>
              <TabsTrigger value="keto" className="rounded-full">Keto</TabsTrigger>
            </>
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Header;
