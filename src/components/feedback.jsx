// Testimonials.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css'; // Swiper core styles

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Priyanka Duvva",
      title: "attended OPTIONS TRADING BASICS",
      feedback:
        "The way he explains the concepts are good,like anyone can understand easily. I have found perfect teacher for my requirement. ",
      rating: 4.8,
    },
    {
      name: "Vikas Ghag",
      title: "attended OPTIONS TRADING BASICS",
      feedback:
        "Great till now and good experience. Best knowledge provided by Paras sir. Thank you so much for your support. Highly recommended to all.",
      rating: 4.8,
    },
    {
      name: "Sapna",
      title: "attended Stock Market Trading",
      feedback:
        "Amazing explanation on financial market. Explained approach of how to select prices And good stocks. He is best for beginners. He taught from where to start in stock market.",
      rating: 4.8,
    },
    {
      name: "Sagar Marick",
      title:
        "attended Stock Market Trading: Options Trading Strategies for Beginners",
      feedback:
        "I love it it was nice to meet you and. Have a class with you. Will like to have another master class with you and hope it will be soon.",
      rating: 4.8,
    },
    {
      name: "Shivam Kalra",
      title: "attended OPTIONS TRADING BASICS",
      feedback:
        "He is such a nice teacher with a deep knowledge of stock market and other financial markets too. I loved the course till now.",
      rating: 4.8,
    },
    {
      name: "Rajat Roy",
      title: "attended Stock Market Trading",
      feedback:
        "Paras is a versatile genius. He has excellent communication skills and a professional stock market trainer.",
      rating: 4.8,
    },
    {
      id: 8,
      name: "Nitish Shukla",
      title: "attended OPTIONS TRADING BASICS",
      feedback:
        "This guy is amazing. Because of The tips that he gave, I made some real money. Thanks bro. Keep up the good work. ",
      rating: 4.8,
    },
    {
      name: "Afsheen Jahan",
      title: "attended OPTIONS TRADING BASICS",
      feedback:
        "An exhilarating experience for me as I found the insights really helpful & value additive. If you are venturing into the world of trading, Mr. Paras Arora is the right man to be your guide and mentor for the same! ",
      rating: 4.8,
    },
  ];

  return (
    <section className="testimonials bg-secondary py-20 flex flex-col w-full">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          What Our <span className='text-primary'>Students</span> Say
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
              <div className="testimonial-card lg:h-[40vh] md:h-[52vh] mx-auto cursor-pointer bg-card-bg p-8 rounded-lg shadow-lg border border-border flex flex-col justify-between h-full">

                <p className="line-clamp-6 text-lg text-feed text-text mb-6 flex-grow">
                  "{item.feedback}"
                </p>
                <div className="flex items-center justify-between mt-6">
                  <div>

                  <div className="rating text-yellow-400 text-xl">
                    {"★".repeat(Math.floor(item.rating))}
                    {item.rating % 1 ? "☆" : ""}
                    
                  </div>

                    <h3 className="text-xl font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-sm text-text">
                      {item.title}
                    </span>
                  
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
