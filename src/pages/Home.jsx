import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Courses from "../components/course-card";
import Feedback from "../components/feedback";

import aboutImage from "../assets/media/about.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col overflow-x-hidden bg-bg text-text">
        {/* Header */}

        {/* Hero Section */}
        <section className="hero min-h-screen flex flex-col items-center justify-center text-center px-5 relative overflow-hidden">
          <svg
            width="1187"
            height="1001"
            viewBox="-20 -20 1187 1001"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg1979346536_755"
            className="absolute z-[-1] top-[-50%] sm:top-[20%] md:left-[-20%] max-w-none"
          >
            <path
              d="M0.66357 395.878C151.766 330.137 486.455 206.496 616.391 237.866C778.81 277.078 535.705 497.898 409.011 567.127C282.318 636.357 175.508 416.402 648.573 377.904C1027.03 347.105 1053.64 623.273 1019.64 765.207"
              stroke="url(#svg1979346536_755_paint0_linear_2_50)"
              strokeWidth="38.86"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id="svg1979346536_755_paint0_linear_2_50"
                x1="47.0156"
                y1="317.289"
                x2="842.344"
                y2="-86.5743"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0082" stopColor="#161b22" />
                <stop offset="0.2696" stopColor="#161b22" />
                <stop offset="0.6088" stopColor="#D3BB8A" />
                <stop offset="0.9847" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="hero-content h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-color mb-2">
              Take Off Your Trading Journey
            </h1>
            <p className="text-lg md:text-3xl mb-8 text-primary">
              Learn. Invest. Grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => (window.location.href = "#courses")}
                className="border text-1xl  border-primary py-3 px-6 sm:px-8 rounded-lg hover:bg-cardBg hover:text-primary"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <section className="slider-section py-10">
          <Slider />
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
            Featured <span className="text-primary">Courses</span>
          </h2>
          <p className="max-w-3xl mx-auto text-center px-5">
            Explore our range of courses tailored to your interests and
            expertise.
          </p>

          <Courses />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="about-section bg-bg-color text-text-color py-20 px-5"
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="about-img w-full lg:w-1/2 relative">
              <img
                src={aboutImage}
                alt="Stock Market Training"
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="about-content w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl md:text-left text-center font-bold text-primary">
                About Us
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                We are one of the rapidly growing institutes for learning the
                Stock Market in India. Since 2017, we’ve empowered students
                across India and abroad with real-world strategies and hands-on
                training in the stock market.
              </p>

              <div className="flex items-center gap-5">
                <span className="text-lg md:text-xl font-semibold text-secondary-color">
                  7+ Years Experience
                </span>
                <span className="text-sm border-l border-border pl-5">
                  Thousands of students trained
                </span>
              </div>

              <blockquote className="bg-secondary-color border-l-4 border-primary-color pl-4 py-2 italic text-sm">
                "Trading isn’t a game of luck – it’s about skill, knowledge, and
                consistency."
              </blockquote>

              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <span className="mr-3 text-primary-color">•</span> Portfolio
                  Management & Financial Advice
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-primary-color">•</span> Risk
                  Management & Derivative Trading
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-primary-color">•</span> Advisory
                  Services for High Returns
                </li>
              </ul>

              <p className="mt-6 text-sm">
                Leave financial worries to us and focus on your core
                business—we’ll handle the rest!
              </p>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <Feedback />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
