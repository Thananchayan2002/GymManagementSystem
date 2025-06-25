import React from 'react';
import ModernSlider from './ModernSlider';

const Home = () => {
  const slides = [
    {
      image: '/images/slider1.jpg',
      content: (
        <>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Welcome to GymPro
          </h2>
          <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
            The ultimate fitness destination for achieving your health goals
          </p>
        </>
      ),
    },
    {
      image: '/images/slider2.jfif',
      content: (
        <>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Train Hard, Stay Strong
          </h2>
          <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
            Professional trainers and state-of-the-art equipment
          </p>
        </>
      ),
    },
    {
      image: '/images/slider3.jpg',
      content: (
        <>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Your Fitness Journey Starts Here
          </h2>
          <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
            Personalized programs for all fitness levels
          </p>
        </>
      ),
    },
    {
      image: '/images/slider4.jpg',
      content: (
        <>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Transform Your Body
          </h2>
          <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
            Join our community and see real results
          </p>
        </>
      ),
    },
  ];

  return (
    <div>
      <ModernSlider 
        slides={slides}
        autoPlay={true}
        interval={4000}
        showDots={true}
        showArrows={true}
      />
      
      {/* Additional content sections can go here */}
    </div>
  );
};

export default Home;