import React, { useEffect, useState } from "react";

const Hero = () => {
    const images = ["/img1.avif", "/img2.avif", "/img3.avif"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">

                <img className="w-full h-full object-cover transition-all duration-1000" src={images[index]} alt={`Slide ${index + 1}`} />
                
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80" />
                </div>
            


            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Embark on extraordinary journeys to the world's most breathtaking destinations. 
            Create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              Explore Destinations
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer">
              Watch Our Story
            </button>
          </div>
        </div>
        </section >
    );
};

export default Hero;
