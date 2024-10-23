import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />

      <section className="contact-us py-20">
        {/* Banner Section */}
        <div className="c-banner bg-cover bg-center py-28 mb-12">
          <h2 className="text-5xl font-bold text-white text-center">
            Get in Touch
          </h2>
        </div>

        {/* Contact Information Section */}
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Phone Number */}
            <div className="flex items-center gap-4">
              <i className="ri-phone-fill rounded-full h-[60px] w-[60px] flex items-center justify-center bg-primary text-3xl text-white"></i>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-1">
                  Phone
                </h3>
                <p className="text-gray-600">
                  <strong>Call Us:</strong> +91 (701) 753-8193
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <i className="ri-map-2-fill rounded-full h-[60px] w-[60px] flex items-center justify-center bg-primary text-3xl text-white"></i>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-1">
                  Address
                </h3>
                <p className="text-gray-600">
                  Wing 3/92C, Opp MDDA Park Main Gate, <br />
                  Prem Nagar, Dehradun, Uttarakhand-248007
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <i className="ri-mail-fill rounded-full h-[60px] w-[60px] flex items-center justify-center bg-primary text-3xl text-white"></i>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-1">
                  Email
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@exponentialworld.in"
                    className="text-primary hover:underline"
                  >
                    info@exponentialworld.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 border-t pt-5 border-gray-300 container mx-auto px-5">
          <h3 className="text-4xl font-semibold text-primary mb-4 text-center">
            Our Location
          </h3>
          <iframe
            className="w-full h-96 rounded-md border border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27549.1664651863!2d77.960638!3d30.332591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a9ce8a03a1f%3A0x2e31206d44d9f341!2sPrem%20Nagar%2C%20Dehradun%2C%20Uttarakhand%20248007!5e0!3m2!1sen!2sin!4v1729250790560!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
