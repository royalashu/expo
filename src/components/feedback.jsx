// Testimonials.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css'; // Swiper core styles

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Rohit Sharma",
      title: "Entrepreneur",
      feedback:
        "Exponential World gave me the confidence and skill to navigate the financial markets. Their practical approach is unmatched!",
      rating: 5,
    },
    {
      name: "Aditi Mehta",
      title: "Financial Analyst",
      feedback:
        "I loved the way they simplified complex topics. The strategies I learned are already showing positive results in my portfolio!",
      rating: 5,
    },
    {
      name: "Vikram Sinha",
      title: "Trader",
      feedback:
        "The best investment I’ve ever made was enrolling in their trading course. Highly recommend it to everyone!",
      rating: 5,
    },
    {
      name: "Sanya Verma",
      title: "Investor",
      feedback:
        "Their insights on long-term investment strategies have transformed the way I manage my finances. Incredible value!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials bg-secondary py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },  // Small screens (phones)
            768: { slidesPerView: 2 },  // Medium screens (tablets)
            1024: { slidesPerView: 3 }, // Large screens (desktops)
          }}
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card cursor-pointer bg-card-bg p-8 rounded-lg shadow-lg border border-border flex flex-col justify-between h-full">
                <p className="text-lg text-text mb-6 flex-grow">
                  "{item.feedback}"
                </p>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-sm text-text">
                      {item.title}
                    </span>
                  </div>
                  <div className="rating text-yellow-400 text-xl">
                    {"★".repeat(Math.floor(item.rating))}
                    {item.rating % 1 ? "☆" : ""}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
