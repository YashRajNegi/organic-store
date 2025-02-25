const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">About UTTRANJALI</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="md:w-2/5 w-3/4 mx-auto">
              <img 
                src="/images/about-image.jpg" 
                alt="UTTRANJALI" 
                className="rounded-lg shadow-lg w-full max-h-80 object-cover"
              />
            </div>
            
            {/* Text Section */}
            <div className="md:w-3/5 prose max-w-none">
              <p className="text-lg text-gray-700">
                <strong>UTTRANJALI</strong> is dedicated to bringing the pure and organic produce of Uttarakhand to your table. Our mission is
                to support local farmers, preserve traditional farming practices, and provide our customers with the
                healthiest, most nutritious foods nature has to offer.
              </p>
              
              <p className="text-lg text-gray-700">
                Founded in <strong>2021</strong>, we have been working closely with farmers in the Himalayan region to cultivate and harvest
                a wide variety of organic grains, pulses, and millets. Our products are grown without the use of harmful
                pesticides or chemical fertilizers, ensuring that you get nothing but the best.
              </p>
              
              <p className="text-lg text-gray-700">
                At <strong>UTTRANJALI</strong>, we believe in sustainability, fair trade, and the power of organic farming to create a
                healthier planet and healthier communities. Join us in our journey towards a more sustainable and nourishing
                future.
              </p>
              
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
    );
};

export default About;
