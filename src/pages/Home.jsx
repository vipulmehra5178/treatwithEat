// import React, { useEffect } from "react";
// import Canvas from "./Canvas";
// import data from "./data";
// import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }, []);

  return (
    <div className="min-h-screen">
      {/* {data[0].map((canvadets, index) => (
        <Canvas key={index} details={canvadets} />
      ))} */}
      <div className="text-center py-20 bg-opacity-90 mt-10">
        <h2 className="text-5xl font-bold italic text-black mb-4">
          &quot;Where Every Flavor Tells a Story&quot;
        </h2>
        <hr className="w-1/4 mx-auto border-2 border-black"></hr>
        <div className="flex justify-center gap-4">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-12 mb-8 mr-4">
        <div className="w-1/2">
          <img
            src="./ambience1.jpg"
            className="w-full h-[450px] rounded-lg object-cover border-2 border-black mx-6"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "./fallback-image.jpg";
            }}
          />
        </div>

        <div className="w-1/2">
          <div className="space-y-6">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-100 mx-auto max-w-fit">
              <span className="text-2xl">🍽️</span>
              <p className="text-xl italic font-semibold bg-white">
                Step into Elegance
              </p>
              <span className="text-2xl">🍽️</span>
            </div>
            <p className="text-md italic bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black mr-4">
              &quot;Experience culinary magic where every dish is a masterpiece,
              every moment is enchanting, and every visit becomes an
              unforgettable journey through exquisite flavors and sublime
              ambiance.&quot;
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black mr-4">
                <span className="text-xl">✨</span>
                <p className="text-md font-medium">
                  Warm, ambient lighting that sets the perfect mood
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black mr-4">
                <span className="text-xl">🪑</span>
                <p className="text-md font-medium">
                  Luxuriously comfortable seating arrangements
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black mr-4">
                <span className="text-xl">💑</span>
                <p className="text-md font-medium">
                  Intimate corners for romantic evenings
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black mr-4">
                <span className="text-xl">🎉</span>
                <p className="text-md font-medium">
                  Spacious sections for celebratory gatherings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4 mt-16 italic text-center">
        Crafting Delicious Memories
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-8 italic text-black">
        &quot;Step in hungry, leave with a story worth sharing&quot;
      </p>
      <div className="flex items-center justify-center gap-8 mb-6">
        <span className="text-2xl">🍽️</span>
        <span className="text-2xl">🍷</span>
        <span className="text-2xl">✨</span>
      </div>
      <hr className="w-1/3 mx-auto border-2 border-black"></hr><br/><br/>
      <div className="flex justify-center gap-8 mb-12">
        <div className="text-center">
          <span className="block text-3xl font-bold text-yellow-500">
            ★★★★★
          </span>
          <span className="text-gray-600">Rating</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-bold text-black-700">
            10+ Years
          </span>
          <span className="text-gray-600">Experience</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-bold text-black-700">
            Premium
          </span>
          <span className="text-gray-600">Quality</span>
        </div>
      </div>
      <hr className="w-1/3 mx-auto border-2 border-black"></hr><br/>

      <p className="text-lg text-center max-w-4xl mx-auto mb-8 leading-relaxed">
        Welcome to Eats & Treats, where culinary excellence meets warm
        hospitality. Our passionate chefs craft each dish with precision and
        care, using only the finest locally-sourced ingredients. From our
        signature dishes that blend traditional flavors with modern techniques,
        to our carefully curated wine selection, we promise an unforgettable
        dining experience that will tantalize your taste buds and warm your
        soul.
      </p>
      <p className="text-lg text-center max-w-4xl mx-auto mb-8 leading-relaxed">
        &quot;Whether you &apos;re celebrating a special occasion or simply
        craving an exceptional meal, our elegant ambiance and attentive service
        create the perfect setting for memorable moments. Join us for an
        extraordinary culinary journey where every dish tells a story and every
        visit becomes a cherished memory.&quot;
      </p>


      <div>
      <div className="text-center">
  <h3 className="text-center italic text-2xl font-bold py-4 text- rounded-lg">
    ✨ Feast Your Eyes on Our Hero Dishes ✨
    <p className="text-xs text-center italic text-black">
      Yummy , they Look ...
    </p>
  </h3>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 mx-auto text-black"
    fill="#FFD700"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>

      </div>
      <br />
      <div className="mt-2 w-screen">
        <div className="relative overflow-hidden shadow-xl mr-2">
          <div className="flex transition-transform duration-500 hover:scale-105">
            <div className="flex w-full gap-0.5 px-2">
              <img
                src="/1.jpg"
                className="w-1/6 h-64 object-cover object-center rounded-lg"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      document.body.removeChild(modal);
                    }
                  };
                  const img = document.createElement("img");
                  img.src = "/1.jpg";
                  img.className = "w-[800px] h-[600px] object-cover rounded-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
              <img
                src="/2.jpg"
                className="w-1/6 h-64 object-cover object-center rounded-lg"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      document.body.removeChild(modal);
                    }
                  };
                  const img = document.createElement("img");
                  img.src = "/2.jpg";
                  img.className = "w-[800px] h-[600px] object-cover rounded-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
              <img
                src="/6.jpg"
                className="w-1/6 h-64 object-cover object-center rounded-lg"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      document.body.removeChild(modal);
                    }
                  };
                  const img = document.createElement("img");
                  img.src = "/6.jpg";
                  img.className = "w-[800px] h-[600px] object-cover rounded-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
              <img
                src="/3.jpg"
                className="w-1/6 h-64 object-cover object-center rounded-lg"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      document.body.removeChild(modal);
                    }
                  };
                  const img = document.createElement("img");
                  img.src = "/3.jpg";
                  img.className = "w-[800px] h-[600px] object-cover rounded-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
              <img
                src="/5.jpg"
                className="w-1/6 h-64 object-cover object-center rounded-lg"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      document.body.removeChild(modal);
                    }
                  };
                  const img = document.createElement("img");
                  img.src = "/5.jpg";
                  img.className = "w-[800px] h-[600px] object-cover rounded-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
              <img
                src="/4.jpg"
                className="w-1/6 h-64 object-cover object-center rounded-lg"
                onClick={() => {
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      document.body.removeChild(modal);
                    }
                  };
                  const img = document.createElement("img");
                  img.src = "/4.jpg";
                  img.className = "w-[800px] h-[600px] object-cover rounded-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container mx-auto px-6 py-16 ">
      <h3 className="text-5xl text-center font-bold mb-6">Our Culinary Philosophy</h3>
      <hr className="border-2 border-black"></hr><br/>
        <div className="flex flex-col md:flex-row gap-12 items-center ">
          <div className="md:w-1/2 ml-2">
            <p className="text-lg leading-relaxed mb-6">
              At Eats & Treats, we believe that dining is more than just
              eating—it&apos;s an experience that engages all your senses. Our
              culinary team draws inspiration from global cuisines while staying
              true to local flavors, creating dishes that tell a story with
              every bite.
            </p>
            <p className="text-lg leading-relaxed">
              We take pride in sourcing the finest ingredients from local
              farmers and producers, ensuring that each dish not only tastes
              exceptional but also supports our community. Our seasonal menus
              reflect our commitment to sustainability and culinary excellence.
            </p>
          </div>
          <div className="md:w-1/2 mr-2">
            <img
              src="./chef.jpg"
              alt="Our head chef at work"
              className="w-full h-[350px] rounded-lg object-cover border-2 border-black"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "./fallback-image.jpg";
              }}
            />
          </div>
        </div>
        <br/>
        <hr className="border-2 border-black"></hr><br/>
      </div>
    </div>
  );
};

export default Home;
