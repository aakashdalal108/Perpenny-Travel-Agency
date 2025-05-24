import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 `}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-cyan-400">Travelers</span> Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from real adventurers who trusted us with their dream trips
            </p>
          </div>

          
        </div>
    
        
            <div className='container mx-auto p-3 flex flex-col md:flex-row gap-10'>

            <div className='card1 text-center place-items-center shadow-2xl rounded-2xl h-fit cursor-pointer outline  outline-gray-700/50 '>
                <img className='w-20 rounded-full p-1 m-2 border border-cyan-400 ' src="/customer.jpg" alt="" />
                <p className='p-4 '>Absolutely incredible experience! The attention to detail and personalized service made our honeymoon unforgettable</p>
                <p className='italic text-sm'>Exceeded all our expectations!</p>
                <div className="text-yellow-400 py-1">{"⭐".repeat(5)}</div>
                <h3 className='text-cyan-400 p-2 italic'>-Shreyas</h3>
            </div>
    
            <div className='card2 text-center md:my-10 place-items-center h-fit shadow-2xl md:border-2 rounded-2xl  cursor-pointer border-cyan-400 outline outline-gray-700/50'>
                <img className='w-20 rounded-full p-1 border my-3 border-cyan-400 ' src="/customer1.jpg" alt="" />
                <p className='p-4 '>Best travel agency I've ever worked with. They handled everything seamlessly and the trip exceeded all expectations.</p>
                <p className='italic text-sm'>We'll definitely travel with them again!</p>
                <div className="text-yellow-400 py-1">{"⭐".repeat(5)}</div>
                <h3 className='text-cyan-400 font-semibold p-2 italic'>-Sarah</h3>
            </div>
    
            <div className='card3 text-center place-items-center shadow-2xl rounded-2xl h-fit cursor-pointer outline  outline-gray-700/50 '>
                <img className='w-20 rounded-full p-1 m-2 border border-cyan-400 ' src="/customer2.jpg" alt="" />
                <p className='p-4 '>From booking to return, everything was perfect. The local guides were amazing and the accommodations were top-notch.</p>
                <p className='italic text-sm'>Seamless booking, incredible destinations.</p>
                <div className="text-yellow-400 py-1">{"⭐".repeat(5)}</div>
                <h3 className='text-cyan-400 p-2 italic'>-Elena Rodriguez  </h3>
            </div>
            
        </div>
    </section>
  )
}

export default Testimonials
