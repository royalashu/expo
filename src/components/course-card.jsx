import React, { useState, useEffect, useRef } from "react";

// Create an initial state for courses
const initialCourses = {
  Investing: [],
  Trading: [],
  Business: [],
  "Skill Development": [],
};

const TabbedCourses = () => {
  const [activeTab, setActiveTab] = useState("Investing");
  const [courses, setCourses] = useState(initialCourses);
  const [loading, setLoading] = useState(true);
  const isFetched = useRef(false); // Track if data is already fetched

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9iGZdSIqcr3_1InSxz-j2oaCwJoP_jQLNFYvVcIU1mfEuBtQLt0obzjDfFJUHLlZ29WFiawI4Lg1M/pub?gid=0&single=true&output=csv"
        );
        const text = await response.text();
        const data = text.split("\n").slice(1);

        const newCourses = { ...initialCourses };

        data.forEach((row) => {
          const [
            title,
            instructor,
            rating,
            oldPrice,
            newPrice,
            img,
            category,
            link,
          ] = row.split(",").map((item) => item.trim());

          if (newCourses[category]) {
            newCourses[category].push({
              title,
              instructor,
              rating,
              oldPrice,
              newPrice,
              img,
              link,
            });
          }
        });

        setCourses(newCourses);


        console.log("fetched courses:", newCourses); // Dont forget to remove



        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    if (!isFetched.current) {
      fetchCourses(); // Fetch data only if not already fetched
      isFetched.current = true; // Set flag to true
    }
  }, []); // Empty dependency array ensures useEffect runs once

  if (loading) {
    return (
      <div className="text-center p-5 text-primary">Loading courses...</div>
    );
  }

  return (
    <section className="tabs-section py-10 px-5">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(courses).map((tab) => (
          <button
            key={tab}
            className={`px-4 text-1xl md:2xl py-2 font-thin rounded-md 
              ${
                activeTab === tab
                  ? "bg-primary text-bg shadow-lg"
                  : "bg-secondary"
              }
              hover:bg-primary hover:text-bg transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {courses[activeTab].map((course, index) => (
          <div
            key={index}
            className="course-card overflow-hidden bg-cardBg rounded-lg shadow-md border border-border flex flex-col w-full sm:w-[15rem] lg:w-[18rem]"
          >
            <div className="course-img">
              <img className="w-full" src={course.img} alt={course.title} />
            </div>
            <div className="course-det p-4 flex flex-col justify-end h-full">
              <h3 className="text-xl font-semibold text-text-color mb-auto">
                {course.title}
              </h3>
              <p className="text-sm mb-1">By {course.instructor}</p>
              <p className="text-sm mb-2 text-gray-500">{course.rating}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="line-through text-gray-500">
                  {course.oldPrice}
                </span>
                <span className="text-primary text-lg font-bold">
                  {course.newPrice}
                </span>
              </div>
              <button
                onClick={() => window.open(course.link, "_blank")}
                className="btn-primary border border-border w-full py-2 rounded-md bg-primary text-text hover:bg-bg hover:text-text transition"
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabbedCourses;
