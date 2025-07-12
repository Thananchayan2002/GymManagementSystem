import ModernSlider from "./ModernSlider";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const Home = () => {
  const slides = [
    {
      image: "/images/slider1.jpg",
      content: (
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 drop-shadow-lg animate-fadeIn">
            Welcome to <span className="text-green-400">Gymly</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            The ultimate fitness destination to crush your health goals and feel empowered
          </p>
        </div>
      ),
    },
    {
      image: "/images/slider2.jfif",
      content: (
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 drop-shadow-lg animate-fadeIn">
            Train Hard, Stay Strong
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Work with top trainers and world-class equipment
          </p>
        </div>
      ),
    },
    {
      image: "/images/slider3.jpg",
      content: (
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 drop-shadow-lg animate-fadeIn">
            Your Fitness Journey Starts Here
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Get customized plans that suit every level of experience
          </p>
        </div>
      ),
    },
    {
      image: "/images/slider4.jpg",
      content: (
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 drop-shadow-lg animate-fadeIn">
            Transform Your Body
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Join a community that motivates and celebrates you
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <NavBar />

      <ModernSlider
        slides={slides}
        autoPlay={true}
        interval={4000}
        showDots={true}
        showArrows={true}
      />

      {/* Additional Info Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-3 sm:mb-4">
            Why Choose Gymly?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-10">
            GymPro is more than just a gym—it's a lifestyle. We offer cutting-edge equipment, personalized fitness plans, expert trainers, and a supportive community to help you stay motivated and get real results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            <div className="bg-green-50 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Expert Coaches</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Get trained by certified fitness professionals who care about your progress.
              </p>
            </div>
            <div className="bg-green-50 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Modern Equipment</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                We offer top-tier machines and weights for every workout style.
              </p>
            </div>
            <div className="bg-green-50 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Flexible Plans</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Monthly, quarterly, or annual options—pick what fits your journey best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;