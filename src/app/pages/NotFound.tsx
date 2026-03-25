import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import logoImg from "../../assets/img_5e4ce615.png";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] to-[#0F4C81] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12">
          <img
            src={logoImg}
            alt="Seek Digital Solutions"
            className="h-14 w-auto brightness-0 invert"
          />
        </div>

        {/* 404 */}
        <div
          className="text-[#E85D26] select-none mb-4"
          style={{ fontSize: "clamp(100px, 20vw, 160px)", fontWeight: "900", lineHeight: "1", letterSpacing: "-0.05em" }}
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-white mb-4" style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "800" }}>
          Oops! Page Not Found
        </h1>
        <p className="text-blue-200 mb-10 leading-relaxed" style={{ fontSize: "16px" }}>
          Looks like this page took an unexpected detour. The page you're looking for may have been moved, renamed, or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#E85D26] text-white font-bold hover:bg-[#d04e1b] transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ fontSize: "15px" }}
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            style={{ fontSize: "15px" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Support
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-blue-300 text-sm mb-4">Or try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Our Services", to: "/#services" },
              { label: "Case Studies", to: "/#results" },
              { label: "Contact Us", to: "/contact" },
              { label: "Privacy Policy", to: "/privacy-policy" },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-blue-300 text-sm hover:text-[#E85D26] transition-colors underline-offset-4 hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}