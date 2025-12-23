import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser, Session } from "@supabase/supabase-js";
import heroBanner from "@/assets/hero-banner.jpg";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Check for saved email and auth state on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("gj_remembered_email");
    if (savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail }));
    }

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // If user just signed in, redirect to home
        if (event === 'SIGNED_IN' && session) {
          setShowWelcome(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // If already logged in, redirect
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setIsLoading(false);
      return;
    }

    if (!isLogin && !formData.name) {
      setError("Please enter your name");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setIsLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // Login
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        localStorage.setItem("gj_remembered_email", formData.email);
        
        toast({
          title: "Welcome back!",
          description: "Your style journey continues...",
        });
      } else {
        // Sign up
        const redirectUrl = `${window.location.origin}/`;
        
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: redirectUrl,
            data: {
              full_name: formData.name,
            },
          },
        });

        if (error) throw error;

        localStorage.setItem("gj_remembered_email", formData.email);
        
        toast({
          title: "Account created!",
          description: "Welcome to GJ Fashion.",
        });
      }
    } catch (err: any) {
      let errorMessage = "Something went wrong. Please try again.";
      
      if (err.message?.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password.";
      } else if (err.message?.includes("User already registered")) {
        errorMessage = "This email is already registered. Please login instead.";
      } else if (err.message?.includes("Password should be")) {
        errorMessage = "Password should be at least 6 characters.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      
      if (error) throw error;
    } catch (err: any) {
      toast({
        title: "Google login not configured",
        description: "Please contact support to enable Google login.",
        variant: "destructive",
      });
    }
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Welcome to GJ Fashion ✨
          </h1>
          <p className="text-muted-foreground text-lg">
            Your style is waiting...
          </p>
        </div>
      </div>
    );
  }

  const savedEmail = localStorage.getItem("gj_remembered_email");

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={heroBanner}
          alt="Fashion"
          className="w-full h-full object-cover animate-fade-in"
          style={{ filter: "blur(1px) brightness(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <h2 className="font-heading text-4xl text-background mb-4">
            Discover Your Style
          </h2>
          <p className="text-background/80 text-lg max-w-md">
            Join GJ Fashion and explore timeless elegance curated for the modern you.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div
          className={`w-full max-w-md animate-fade-in-up ${shake ? "animate-shake" : ""}`}
          style={{ animationDelay: "200ms" }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl text-foreground mb-2">GJ Fashion</h1>
            <p className="text-muted-foreground">
              {isLogin ? "Welcome back" : "Create your account"}
            </p>
          </div>

          {/* Recognized device message */}
          {isLogin && savedEmail && (
            <div className="bg-muted rounded-lg p-3 mb-6 animate-fade-in">
              <p className="text-sm text-muted-foreground">
                ✨ Welcome back! We recognized your device.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2 animate-fade-in-up">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 h-12 rounded-xl border-border bg-card focus:border-primary focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 h-12 rounded-xl border-border bg-card focus:border-primary focus:ring-primary transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 h-12 rounded-xl border-border bg-card focus:border-primary focus:ring-primary transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg animate-fade-in">
                {error}
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  {isLogin ? "Signing in..." : "Creating account..."}
                </span>
              ) : isLogin ? (
                "Login to Style"
              ) : (
                "Create Account"
              )}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full h-12 rounded-xl gap-2 hover:bg-card transition-all duration-300"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </form>

          {/* Toggle Login/Signup */}
          <p className="text-center mt-8 text-muted-foreground">
            {isLogin ? "New to GJ Fashion?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-primary font-medium hover:underline"
            >
              {isLogin ? "Create Account" : "Login"}
            </button>
          </p>
        </div>
      </div>

      {/* Custom shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Auth;
