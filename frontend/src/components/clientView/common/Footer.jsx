import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.jpg"
                alt="XFit Arena Logo"
                className="w-14 h-14 rounded-xl object-cover border-2 border-green-500 shadow-lg"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Gymly
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Providing high-performance fitness solutions tailored to your
              goals. Join the arena where results are made.
            </p>
            <div className="flex gap-2 pt-1">
              {[{ icon: Facebook, color: "hover:bg-blue-600" },
                { icon: Twitter, color: "hover:bg-blue-400" },
                { icon: Instagram, color: "hover:bg-pink-600" },
                { icon: Linkedin, color: "hover:bg-blue-700" }].map(({ icon, color }, i) => {
                const Icon = icon;
                return (
                  <a
                    key={i}
                    href="#"
                    className={`p-2 rounded-full bg-gray-700 ${color} transition-all duration-300 transform hover:scale-110 shadow-md`}
                  >
                    <Icon size={18} className="text-gray-300 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[{ to: "/client/home", label: "Home" },
                { to: "/client/about", label: "About Us" },
                { to: "/client/packages", label: "Packages" },
                { to: "/client/trainers", label: "Trainers" },
                { to: "/client/blog", label: "Blog" },
                { to: "/client/contact", label: "Contact" }].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-green-400 text-xs transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-xs">
              {[{ day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
                { day: "Saturday", time: "8:00 AM - 8:00 PM" },
                { day: "Sunday", time: "8:00 AM - 6:00 PM" }].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-400">{item.day}</span>
                  <span className="text-green-400 font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <div className="text-[10px] text-gray-500 italic">
                *24/7 access for premium members
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-gray-800 rounded-lg shadow-inner">
                  <Mail size={18} className="text-green-400" />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:info@XFitArena.com"
                    className="text-gray-300 hover:text-green-400 text-xs transition-colors duration-300"
                  >
                    gymlygyms@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-gray-800 rounded-lg shadow-inner">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+94771121212"
                    className="text-gray-300 hover:text-green-400 text-xs transition-colors duration-300"
                  >
                    +94 76 446 658
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-gray-800 rounded-lg shadow-inner">
                  <MapPin size={18} className="text-green-400" />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase tracking-wider">
                    Address
                  </span>
                  <span className="text-gray-300 text-xs leading-snug">
                    No. 44, A9 Kandy Road<br />
                    Chavakachcheri, Jaffna<br />
                    Sri Lanka
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-green-400">Gymly</span>. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="text-[10px] text-gray-500 hover:text-green-400 transition-colors duration-300 uppercase tracking-wider"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[10px] text-gray-500 hover:text-green-400 transition-colors duration-300 uppercase tracking-wider"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-[10px] text-gray-500 hover:text-green-400 transition-colors duration-300 uppercase tracking-wider"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


