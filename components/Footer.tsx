import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white block mb-6">
              NEXUS<span className="text-nexus-primary">.</span>
            </a>
            <p className="text-gray-400 max-w-sm">
              We build digital experiences that drive results. Merging creativity with data science to propel brands forward.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-nexus-primary transition-colors">Copywriting</a></li>
              <li><a href="#" className="hover:text-nexus-primary transition-colors">Social Strategy</a></li>
              <li><a href="#" className="hover:text-nexus-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-nexus-primary transition-colors">Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-nexus-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-nexus-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-nexus-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-nexus-primary transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Nexus Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
