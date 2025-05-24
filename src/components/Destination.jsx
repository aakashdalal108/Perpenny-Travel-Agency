import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: '/destination1.jpeg',
    rating: 4.9,
    price: '79,999',
    description: 'Stunning sunsets and white-washed buildings'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: '/destination2.jpg',
    rating: 4.9,
    price: '49,999',
    description: 'Tropical paradise with ancient temples'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: '/destination3.jpeg',
    rating: 4.9,
    price: '49,999',
    description: 'Modern metropolis meets traditional culture'
  },
  {
    id: 4,
    name: 'Swiss Alps',
    image: '/destination4.jpeg',
    rating: 4.9,
    price: '59,999',
    description: 'Breathtaking mountain landscapes'
  },
  {
    id: 5,
    name: 'Maldives',
    image: '/destination5.jpeg',
    rating: 4.9,
    price: '49,999',
    description: 'Crystal clear waters and luxury resorts'
  },
  {
    id: 6,
    name: 'Iceland',
    image: '/destination6.jpg',
    rating: 4.9,
    price: '99,999',
    description: 'Northern lights and dramatic landscapes'
  }
]

const Destination = () => {
  
  return (

    <section className='destination my-7'>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 '
          `}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-cyan-400">Destinations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the world's most incredible places, handpicked by our travel experts
          </p>
        </div>
      </div>

      <div className='flex flex-wrap gap-4 justify-center '>
        {destinations.map((dest) => (
          <div key={dest.id} className="w-full sm:w-1/2 lg:w-1/4 group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-200 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer">
            <img className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src={dest.image} alt={dest.name} />
            <div className="absolute top-4 right-4 bg-gray-900/80 rounded-full px-3 py-1 text-sm font-semibold">
                    {dest.price}
                  </div>
            <div className="p-3 flex flex-col justify-between ">
              <h3 className="text-2xl">{dest.name}</h3>
              <p className="text-white mb-4">{dest.description}</p>
              <div className="text-yellow-400">{"⭐".repeat(4)} 4.9</div>
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Destination
