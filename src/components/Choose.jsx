import React from 'react'
import { Award, Clock, Shield, Users } from 'lucide-react';

const features = [

{
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'Find a lower price? We\'ll match it and give you 5% off'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs'
  },
  {
    icon: Award,
    title: 'Handpicked Tours',
    description: 'Carefully curated experiences by travel experts'
  },
  {
    icon: Users,
    title: 'Trusted by 100K+',
    description: 'Join thousands of satisfied travelers worldwide'
  }
];

const Choose = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 `}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-cyan-400">Perpenny</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're not just a travel agency - we're your partners in creating extraordinary experiences
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-center gap-8 ">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`text-center group transform transition-all duration-300 hover:-translate-y-2 shadow-2xl outline  outline-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-gray-900/50 hover:outline-cyan-400/50`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-200">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Choose
