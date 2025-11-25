import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import { generateMarketingHeadline } from '../services/geminiService';
import { ServiceItem } from '../types';

// Icons
const CopyIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const SocialIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const SeoIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);
const WorkflowIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

// Dummy Data for SEO Chart
const seoData = [
  { name: 'Mon', traffic: 4000 },
  { name: 'Tue', traffic: 3000 },
  { name: 'Wed', traffic: 6000 },
  { name: 'Thu', traffic: 8000 },
  { name: 'Fri', traffic: 5000 },
  { name: 'Sat', traffic: 9000 },
  { name: 'Sun', traffic: 10000 },
];

const Services: React.FC = () => {
  const [headlineTopic, setHeadlineTopic] = useState('');
  const [generatedHeadline, setGeneratedHeadline] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!headlineTopic) return;
    setIsGenerating(true);
    const result = await generateMarketingHeadline(headlineTopic);
    setGeneratedHeadline(result);
    setIsGenerating(false);
  };

  const services: ServiceItem[] = [
    {
      id: 'copy',
      title: 'Strategic Copywriting',
      description: 'Persuasive words that sell. We craft compelling narratives that resonate with your audience and drive action.',
      icon: <CopyIcon />,
      feature: 'ai-demo',
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Dominate search results. Our data-first approach ensures your brand is visible exactly when customers are looking.',
      icon: <SeoIcon />,
      feature: 'chart',
    },
    {
      id: 'social',
      title: 'Social Strategy',
      description: 'Community building that matters. We turn followers into brand advocates through authentic engagement.',
      icon: <SocialIcon />,
      feature: 'none',
    },
    {
      id: 'workflow',
      title: 'Workflow Automation',
      description: 'Scale without the chaos. We implement custom AI and CRM automations to streamline your operations.',
      icon: <WorkflowIcon />,
      feature: 'steps',
    },
  ];

  return (
    <section id="services" className="py-24 bg-nexus-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate growth and maximize ROI across every channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border border-white/5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-lg bg-nexus-primary/20 text-nexus-primary group-hover:bg-nexus-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                {service.feature === 'ai-demo' && (
                  <span className="px-3 py-1 text-xs font-semibold text-nexus-accent bg-nexus-accent/10 rounded-full border border-nexus-accent/20">
                    AI Powered
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Interactive Features within Cards */}
              <div className="mt-auto pt-6 border-t border-white/10">
                
                {service.feature === 'ai-demo' && (
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide font-semibold">Try Our Headline Generator</p>
                    <div className="flex gap-2 mb-3">
                      <input 
                        type="text" 
                        value={headlineTopic}
                        onChange={(e) => setHeadlineTopic(e.target.value)}
                        placeholder="e.g. Coffee Shop, SaaS"
                        className="w-full bg-nexus-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-nexus-primary"
                      />
                      <button 
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-nexus-primary hover:bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                      >
                        {isGenerating ? '...' : 'Go'}
                      </button>
                    </div>
                    {generatedHeadline && (
                      <div className="p-3 bg-nexus-primary/10 border border-nexus-primary/20 rounded-lg">
                        <p className="text-nexus-primary text-sm font-medium">"{generatedHeadline}"</p>
                      </div>
                    )}
                  </div>
                )}

                {service.feature === 'chart' && (
                  <div className="h-40 w-full mt-2">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Client Traffic Growth (Avg)</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={seoData}>
                        <Bar dataKey="traffic" fill="#6366f1" radius={[4, 4, 0, 0]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#161826', borderColor: '#333' }}
                          itemStyle={{ color: '#fff' }}
                          cursor={{fill: 'transparent'}}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
                
                {service.feature === 'steps' && (
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-nexus-secondary/20 flex items-center justify-center text-nexus-secondary mb-2">1</div>
                      <span>Audit</span>
                    </div>
                    <div className="h-0.5 w-12 bg-white/10"></div>
                     <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-nexus-secondary/20 flex items-center justify-center text-nexus-secondary mb-2">2</div>
                      <span>Build</span>
                    </div>
                    <div className="h-0.5 w-12 bg-white/10"></div>
                     <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-nexus-secondary/20 flex items-center justify-center text-nexus-secondary mb-2">3</div>
                      <span>Scale</span>
                    </div>
                  </div>
                )}

                {service.feature === 'none' && (
                  <a href="#contact" className="text-nexus-primary text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                    Learn more 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
