import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Courses from "../components/course-card";
import Feedback from "../components/feedback";

import aboutImage from "../assets/media/about.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="hero-content h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-primary-color mb-4">
            Take Off Your Trading Journey
          </h1>
          <p className="text-xl mb-8">Learn. Invest. Grow.</p>
          <div className="flex gap-4">
            {/* <button className="bg-primary px-8 py-3 text-bg rounded-lg hover:bg-text">Enroll Now</button> */}
            <button className="border border-primary py-3 px-8 rounded-lg hover:bg-cardBg hover:text-primary">
              Explore Courses
            </button>
          </div>
        </div>

        {/* <div className="hero-btm flex justify-center items-center gap-10 w-full pt-5 pb-10 bg-cardBg-color">
          <div className="hbtm-card border border-border px-7 py-5 rounded-lg bg-[#f1f1f120]">
            <h3 className="text-xl font-semibold mb-2">Market Trends</h3>
            <p className="text-sm text-secondary-color">
              Stay ahead by analyzing the latest stock market trends. Identify
              key opportunities and make informed trading decisions.
            </p>
          </div>

          <div className="hbtm-card border border-border px-7 py-5 rounded-lg bg-[#f1f1f120]">
            <h3 className="text-xl font-semibold mb-2">Trading Strategies</h3>
            <p className="text-sm text-secondary-color">
              Discover proven strategies to minimize risks and maximize profits,
              tailored for beginner and advanced traders.
            </p>
          </div>

          <div className="hbtm-card border border-border px-7 py-5 rounded-lg bg-[#f1f1f120]">
            <h3 className="text-xl font-semibold mb-2">Portfolio Management</h3>
            <p className="text-sm text-secondary-color">
              Learn how to diversify and manage your portfolio effectively to
              achieve long-term financial success.
            </p>
          </div>

          <div className="hbtm-card border border-border px-7 py-5 rounded-lg bg-[#f1f1f120]">
            <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
            <p className="text-sm text-secondary-color">
              Gain access to expert insights from seasoned traders and market
              analysts to guide your investment journey.
            </p>
          </div>
        </div> */}
      </section>

      {/* Slider Section */}
      <section className="slider-section py-12">
        <Slider />
      </section>

      {/* Courses Section */}
      <section className="courses w-full py-12">
        <h2 className="text-5xl font-bold text-center mb-2">
          Featured <span className="text-primary">Courses</span>
        </h2>
        <p className="max-w-3xl mx-auto text-center">
          Explore our range of courses tailored to your interests and expertise.
        </p>

        <Courses />
      </section>

      {/* About Section */}
      <section className="about-section bg-bg-color text-text-color py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-5">
          {/* Left Side - Image */}
          <div className="about-img w-full lg:w-1/2 relative">
            <img
              src={aboutImage}
              alt="Stock Market Training"
              className="w-full object-cover h-[400px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-card-bg-color opacity-70 rounded-lg"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="about-content w-full lg:w-1/2 space-y-6">
            <h2 className="text-5xl font-bold text-primary-color">About Us</h2>
            <p className="text-lg leading-relaxed">
              We are one of the rapidly growing institutes for learning the
              Stock Market in India. Since 2017, we’ve empowered students across
              India and abroad with real-world strategies and hands-on training
              in the stock market.
            </p>

            <div className="flex items-center gap-5">
              <span className="text-xl font-semibold text-secondary-color">
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

      {/* feedback */}
        <Feedback />

      {/* Footer */}
      <Footer />
    </div>
  );
}
