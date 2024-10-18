import React, { useState } from "react";

// Sample course data for each tab
const courses = {
  Investing: [
    { title: "Basics of Personal Finance", instructor: "Paras Sir", rating: "4.9 (15 ratings)", oldPrice: "Rs. 7999", newPrice: "Rs. 5499" },
    { title: "Financial Freedom Blueprint", instructor: "Paras Sir", rating: "4.9 (15 ratings)", oldPrice: "Rs. 7999", newPrice: "Rs. 5499" }
  ],
  Trading: [
    { title: "Basics of Financial Markets", instructor: "Paras Sir", rating: "4.9 (15 ratings)", oldPrice: "Rs. 7999", newPrice: "Rs. 5499" },
    { title: "Advanced Trading Strategies", instructor: "Paras Sir", rating: "4.9 (15 ratings)", oldPrice: "Rs. 9999", newPrice: "Rs. 6499" }
  ],
  Business: [
    { title: "Business Growth Formula", instructor: "Paras Sir", rating: "4.9 (15 ratings)", oldPrice: "Rs. 7999", newPrice: "Rs. 5499" }
  ],
  "Skill Development": [
    { title: "Public Speaking Mastery", instructor: "Paras Sir", rating: "4.9 (15 ratings)", oldPrice: "Rs. 6999", newPrice: "Rs. 4499" }
  ]
};

const TabbedCourses = () => {
  const [activeTab, setActiveTab] = useState("Investing"); // Default active tab

  return (
    <section className="tabs-section py-10 px-5">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10">
        {Object.keys(courses).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg text-[1.2vw] font-[100] rounded-md 
              ${activeTab === tab ? "bg-primary text-bg" : "bg-secondary"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Courses Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses[activeTab].map((course, index) => (
          <div key={index} className="course-card bg-cardBg p-6 rounded-lg shadow-md border border-border-color flex flex-col">
            <h3 className="text-[1.7vw] font-[100] mb-2 text-text-color">{course.title}</h3>
            <p className="text-sm mb-2">By {course.instructor}</p>
            <p className="text-sm mb-2">{course.rating}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="line-through">{course.oldPrice}</span>
              <span className="text-primary text-lg font-bold">{course.newPrice}</span>
            </div>
            <button className="btn-primary mt-auto w-full">ENROLL NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabbedCourses;
