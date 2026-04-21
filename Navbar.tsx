import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                <span className="font-bold text-white text-xs">M</span>
              </div>
              <span className="text-xl font-bold text-white">MadeMyAds</span>
            </div>
            <p className="max-w-xs text-gray-400">
              Transforming businesses with AI-powered marketing systems, premium designs, and high-converting ad strategies.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold text-white">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="https://wa.me/1234567890" className="hover:text-purple-400 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MadeMyAds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
