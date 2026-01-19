import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 z-10">
        {/* Large Background Text Effect */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none text-foreground/5 select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Something's missing
            </h2>
          </div>
        </div>

        <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm"
          >
            <MoveLeft className="w-4 h-4" />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all font-medium text-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
