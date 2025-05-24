import { Globe , Phone , Mail } from "lucide-react";
const Footer = () => {
    return (
        <footer className="pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Perpenny
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Your trusted partner in creating extraordinary travel experiences. 
                From exotic destinations to luxury accommodations, we make your dreams come true.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500  cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500  cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white ">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white ">Travel Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white ">Booking Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white ">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white ">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 py-3">
            
              <p className="text-gray-400 text-sm">
                © 2025 Perpenny Tours & Travels . All rights reserved.
              </p>
              
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  