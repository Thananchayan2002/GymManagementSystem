import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ModernSlider = ({
  slides,
  autoPlay = false,
  interval = 5000,
  showDots = true,
  showArrows = true,
  arrowStyles = {},
  dotStyles = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const navigate = useNavigate();

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      goToNext();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, interval, goToNext]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="slider-container relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      <div
        className="slider-wrapper flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide min-w-full h-full relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-[#192841]/40 bg-opacity-30"></div>

            {slide.content && (
              <div className="slide-content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto">
                  {slide.content}
                  <button
                    className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => navigate("/client/register")}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="slider-arrow left-arrow absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
            style={arrowStyles}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="slider-arrow right-arrow absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
            style={arrowStyles}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && slides.length > 1 && (
        <div className="slider-dots absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-red-600 scale-125" : "bg-gray-300"
              }`}
              style={dotStyles}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play toggle */}
      {autoPlay && (
        <button
          onClick={toggleAutoPlay}
          className="absolute top-6 right-6 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {isPlaying ? (
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      )}
    </div>
  );
};

ModernSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      content: PropTypes.node,
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
  arrowStyles: PropTypes.object,
  dotStyles: PropTypes.object,
};

export default ModernSlider;
