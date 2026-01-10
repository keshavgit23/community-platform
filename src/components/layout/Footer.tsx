import { forwardRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users, Github, Twitter } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleProtectedLink = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      navigate(`/dashboard${path}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <footer ref={ref} className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">Community</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Build, manage, and grow your community with our powerful platform.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="/dashboard/posts" 
                  onClick={handleProtectedLink("/posts")}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Posts
                </a>
              </li>
              <li>
                <a 
                  href="/dashboard/events" 
                  onClick={handleProtectedLink("/events")}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="/dashboard/members" 
                  onClick={handleProtectedLink("/members")}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Members
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © 2025 Community. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
