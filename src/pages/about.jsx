/* eslint-disable no-unused-vars */

//done
import React from "react";

const About = () => {
  const reviews = [
    {
      name: "Priya Singh",
      rating: 5,
      comment:
        "Amazing authentic Indian cuisine! The butter chicken was divine and the service was impeccable.",
      date: "June 15, 2024",
    },
    {
      name: "John Miller",
      rating: 5,
      comment:
        "Best Italian food I've had outside of Italy. The ambiance is perfect for both casual dining and special occasions.",
      date: "May 28, 2023",
    },
    {
      name: "Ravi Kumar",
      rating: 4,
      comment:
        "Great variety of dishes from different cuisines. The South Indian dosas are particularly excellent.",
      date: "June 2, 2024",
    },
    {
      name: "Sarah Williams",
      rating: 5,
      comment:
        "The dessert selection is outstanding! Loved the fusion of Indian and Italian sweets.",
      date: "June 10, 2023",
    },
    {
      name: "Amit Patel",
      rating: 5,
      comment:
        "Perfect place for family gatherings. The staff is very courteous and the food is consistently good.",
      date: "May 20, 2023",
    },
    {
      name: "Eisha",
      rating: 4,
      comment:
        "Perfect place for Date. The staff is very courteous and the food is consistently good.",
      date: "May 20, 2024",
    },
    {
      name: "Kimmi Oberoi",
      rating: 5,
      comment:
        "Perfect place for family gatherings. The staff is very courteous and the food is consistently good.",
      date: "Jan 20, 2025",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="mb-16">
          <hr className="w-1/2 mx-auto border-2 border-black"></hr>
            <br/>
            <h1 className="text-6xl font-bold text-center mb-12">Our Story</h1>
            <hr className="w-1/2 mx-auto border-2 border-black"></hr>
            <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/resto.webp"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Welcome to Eats & Treats, where we bring together the best of
                  Indian, Italian and Chinese cuisines under one roof.
                  Established in 2020, we&apos;ve been delighting food lovers
                  with our diverse menu and warm hospitality in the heart of the
                  city.
                </p>
                <p className="text-lg">
                  Our talented chefs craft each dish with care and expertise,
                  bringing authentic flavors from traditional recipes while
                  adding their own creative touches.
                </p>
                <p className="text-lg">
                  At Eats & Treats, we believe in using only high-quality
                  ingredients to ensure every meal is a memorable experience.
                  Our cozy ambiance and friendly service make this the perfect
                  spot for family dinners, casual meetups, or special
                  celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-8">
              Find Us Here
            </h2>
            <div className="bg-white/80 rounded-lg shadow-lg p-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224408.00730251477!2d77.51599554999999!3d28.498359799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737811721683!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold">
                  23/ VB Lisa Street,Greater Noida <br></br>
                  UP-201310 , India
                </p>
                <p className="text-lg">Open Daily: 11:00 AM - 11:00 PM</p>
                <p className="text-lg">Phone: +91 12345 67890</p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                >
                  <p className="font-semibold mb-1">{review.name}</p>
                  <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400 space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  <div className="text-sm text-gray-500">
                    <p>{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
