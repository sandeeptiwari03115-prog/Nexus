import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-nexus-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-nexus-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[50%] w-96 h-96 bg-nexus-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up">
          <span className="text-nexus-accent text-xs md:text-sm font-semibold tracking-wider uppercase">
            🚀 The Future of Digital Growth
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ignite Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-primary via-nexus-secondary to-nexus-accent">
            Digital Presence
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Nexus combines data-driven strategy with world-class creative to scale ambitious brands. We don't just follow trends—we set them.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-nexus-dark font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            Get a Proposal
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors backdrop-blur-sm"
          >
            Explore Services
          </a>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { label: 'Revenue Generated', value: '$50M+' },
            { label: 'Active Clients', value: '120+' },
            { label: 'Team Members', value: '35' },
            { label: 'Awards Won', value: '15' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
