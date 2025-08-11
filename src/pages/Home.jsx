
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center py-20 bg-opacity-90 mt-10">
        <h2 className="text-5xl font-bold italic text-black mb-4">
          &quot;Where Every Flavor Tells a Story&quot;
        </h2>
        <hr className="w-1/4 mx-auto border-2 border-black"></hr>
        <div className="flex justify-center gap-4 text-2xl mt-2">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <img
            src="./ambience1.jpg"
            alt="Ambience"
            className="w-full h-[300px] md:h-[450px] rounded-lg object-cover border-2 border-black mx-auto"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "./fallback-image.jpg";
            }}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-100 max-w-fit mx-auto">
            <span className="text-2xl">🍽️</span>
            <p className="text-xl italic font-semibold bg-white">
              Step into Elegance
            </p>
            <span className="text-2xl">🍽️</span>
          </div>

          <p className="text-md italic bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black">
            &quot;Experience culinary magic where every dish is a masterpiece,
            every moment is enchanting, and every visit becomes an unforgettable
            journey through exquisite flavors and sublime ambiance.&quot;
          </p>

          <div className="space-y-6">
            {[
              { icon: "✨", text: "Warm, ambient lighting that sets the perfect mood" },
              { icon: "🪑", text: "Luxuriously comfortable seating arrangements" },
              { icon: "💑", text: "Intimate corners for romantic evenings" },
              { icon: "🎉", text: "Spacious sections for celebratory gatherings" },
            ].map(({ icon, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-2 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-4 border-black"
              >
                <span className="text-xl">{icon}</span>
                <p className="text-md font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4 mt-16 italic text-center">
        Crafting Delicious Memories
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-8 italic text-black">
        &quot;Step in hungry, leave with a story worth sharing&quot;
      </p>
      <div className="flex items-center justify-center gap-8 mb-6 text-2xl">
        <span>🍽️</span>
        <span>🍷</span>
        <span>✨</span>
      </div>
      <hr className="w-1/3 mx-auto border-2 border-black mb-8" />

      <div className="flex justify-center gap-8 mb-12 px-4 md:px-0">
        <div className="text-center">
          <span className="block text-3xl font-bold text-yellow-500">★★★★★</span>
          <span className="text-gray-600">Rating</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-bold text-black-700">10+ Years</span>
          <span className="text-gray-600">Experience</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-bold text-black-700">Premium</span>
          <span className="text-gray-600">Quality</span>
        </div>
      </div>
      <hr className="w-1/3 mx-auto border-2 border-black mb-8" />

      <p className="text-lg text-center max-w-4xl mx-auto mb-8 leading-relaxed px-4 md:px-0">
        Welcome to Eats & Treats, where culinary excellence meets warm
        hospitality. Our passionate chefs craft each dish with precision and
        care, using only the finest locally-sourced ingredients. From our
        signature dishes that blend traditional flavors with modern techniques,
        to our carefully curated wine selection, we promise an unforgettable
        dining experience that will tantalize your taste buds and warm your
        soul.
      </p>
      <p className="text-lg text-center max-w-4xl mx-auto mb-8 leading-relaxed px-4 md:px-0">
        &quot;Whether you &apos;re celebrating a special occasion or simply
        craving an exceptional meal, our elegant ambiance and attentive service
        create the perfect setting for memorable moments. Join us for an
        extraordinary culinary journey where every dish tells a story and every
        visit becomes a cherished memory.&quot;
      </p>

      <div className="text-center">
        <h3 className="italic text-2xl font-bold py-4 rounded-lg">
          ✨ Feast Your Eyes on Our Hero Dishes ✨
          <p className="text-xs italic text-black mt-1">Yummy, they Look ...</p>
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-auto text-black"
          fill="#FFD700"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <br />

      <div className="mt-2 w-screen overflow-x-auto">
        <div className="relative overflow-hidden shadow-xl mr-2">
          <div className="flex transition-transform duration-500 hover:scale-105 gap-1 px-2">
            {["1", "2", "6", "3", "5", "4"].map((num) => (
              <img
                key={num}
                src={`/${num}.jpg`}
                alt={`Hero Dish ${num}`}
                className="w-1/3 sm:w-1/6 h-48 sm:h-64 object-cover object-center rounded-lg cursor-pointer"
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
                  img.src = `/${num}.jpg`;
                  img.className =
                    "max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <br />

      <div className="container mx-auto px-6 py-16">
        <h3 className="text-5xl text-center font-bold mb-6">Our Culinary Philosophy</h3>
        <hr className="border-2 border-black mb-6" />
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6 px-4 md:px-0">
              At Eats & Treats, we believe that dining is more than just
              eating—it&apos;s an experience that engages all your senses. Our
              culinary team draws inspiration from global cuisines while staying
              true to local flavors, creating dishes that tell a story with
              every bite.
            </p>
            <p className="text-lg leading-relaxed px-4 md:px-0">
              We take pride in sourcing the finest ingredients from local
              farmers and producers, ensuring that each dish not only tastes
              exceptional but also supports our community. Our seasonal menus
              reflect our commitment to sustainability and culinary excellence.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="./chef.jpg"
              alt="Our head chef at work"
              className="w-full h-48 md:h-[350px] rounded-lg object-cover border-2 border-black mx-auto"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "./fallback-image.jpg";
              }}
            />
          </div>
        </div>
        <hr className="border-2 border-black mt-8" />
      </div>
    </div>
  );
};

export default Home;
