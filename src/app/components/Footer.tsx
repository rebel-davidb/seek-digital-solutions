import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "../../assets/img_5e4ce615.png";

const services = [
  { label: "SEO Optimization", to: "/services/seo" },
  { label: "Website Design & Development", to: "/services/web-design" },
  { label: "Paid Advertising (PPC)", to: "/services/ppc" },
  { label: "Reputation Management", to: "/services/reputation-management" },
  { label: "Branding", to: "/services/branding" },
  { label: "Conversion Optimization", to: "/services/conversion" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-5">
              <img
                src={logoImg}
                alt="Seek Digital Solutions – Innovate Fearlessly"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We help businesses grow with data-driven digital marketing strategies that deliver real, measurable results.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                null
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5" style={{ fontSize: "15px" }}>Our Services</h3>
            <ul className="space-y-2.5">
              {services.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-gray-400 text-sm hover:text-[#E85D26] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5" style={{ fontSize: "15px" }}>Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/#about" },
                { label: "Our Process", to: "/#process" },
                { label: "Case Studies", to: "/#results" },
                { label: "Contact Us", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy-policy" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-gray-400 text-sm hover:text-[#E85D26] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5" style={{ fontSize: "15px" }}>Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E85D26] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">24 Carrier Court<br />Southington, CT 06489</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E85D26] shrink-0" />
                <a href="tel:+18602658630" className="text-gray-400 text-sm hover:text-[#E85D26] transition-colors">
                  (860) 265-8630
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E85D26] shrink-0" />
                <a href="mailto:support@seekdigitalsolutions.com" className="text-gray-400 text-sm hover:text-[#E85D26] transition-colors">
                  support@seekdigitalsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Seek Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-[#E85D26] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-500 text-sm hover:text-[#E85D26] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}