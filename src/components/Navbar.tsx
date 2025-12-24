import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User, LogOut, ChevronDown, Sparkles, Tag } from "lucide-react";
import WishlistSheet from "@/components/WishlistSheet";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { toast } from "@/hooks/use-toast";

const menCategories = [
  { name: "Blazers", href: "/shop?category=blazers" },
  { name: "Shirts", href: "/shop?category=shirts" },
  { name: "Trousers", href: "/shop?category=trousers" },
  { name: "T-Shirts", href: "/shop?category=men" },
];

const womenCategories = [
  { name: "Dresses", href: "/shop?category=women" },
  { name: "Tops", href: "/shop?category=women" },
  { name: "Skirts", href: "/shop?category=women" },
  { name: "Blazers", href: "/shop?category=blazers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Logged out",
      description: "See you soon!",
    });
    navigate("/");
  };

  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-md shadow-soft border-b border-border py-0" 
          : "bg-background/95 backdrop-blur-sm border-b border-border py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
              GJ Fashion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 nav-link-underline"
            >
              Home
            </Link>

            {/* Men Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Men
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-3">
                      {menCategories.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Women Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Women
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-3">
                      {womenCategories.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/shop"
              className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 nav-link-underline"
            >
              Shop
            </Link>

            {/* New Arrivals - Highlighted */}
            <Link
              to="/shop"
              className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              New Arrivals
            </Link>

            {/* Sale - Badge */}
            <Link
              to="/shop"
              className="px-4 py-2 text-sm font-semibold tracking-widest uppercase text-hot hover:text-hot/80 transition-colors duration-300 flex items-center gap-1.5"
            >
              <Tag className="h-3.5 w-3.5" />
              Sale
            </Link>

            {isHomePage && (
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact", true)}
                className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 nav-link-underline"
              >
                Contact
              </a>
            )}
          </div>

          {/* Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            <WishlistSheet />
            <button className="p-2.5 text-foreground hover:text-primary hover:bg-muted rounded-full transition-all duration-300 relative group">
              <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Auth Button */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2.5 text-foreground hover:text-primary hover:bg-muted rounded-full transition-all duration-300">
                    <User className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="text-muted-foreground text-sm font-medium">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="ml-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <WishlistSheet />
            <button className="p-2 text-foreground hover:text-primary transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-background border-b border-border overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          
          {/* Mobile Men Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full py-3 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              Men
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {menCategories.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link to={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Women Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full py-3 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              Women
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {womenCategories.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link to={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Shop
          </Link>

          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-3 text-sm font-medium tracking-widest uppercase text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            New Arrivals
          </Link>

          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-3 text-sm font-semibold tracking-widest uppercase text-hot"
          >
            <Tag className="h-3.5 w-3.5" />
            Sale
          </Link>
          
          {/* Mobile Auth */}
          <div className="pt-4 border-t border-border mt-4">
            {user ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-sm font-medium tracking-widest uppercase text-destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium tracking-widest uppercase text-primary"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
