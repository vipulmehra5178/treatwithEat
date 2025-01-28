import { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("https://rest-menuapi.onrender.com/api/menu", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error.message);
      }
    };

    fetchMenu();
  }, []);

  // Group menu items by category
  const groupedMenuItems = menuItems.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-20 px-2 px-10">
        <hr className="w-1/2 mx-auto border-2 border-black"></hr>
        <br />
        <h1 className="text-6xl font-bold text-center mb-8 text-black">
          🍽️ Our Menu 🍽️
        </h1>
        <hr className="w-1/2 mx-auto border-2 border-black"></hr>
        <br />

        {/* Dynamically render sections for each category */}
        {Object.entries(groupedMenuItems).map(([category, items]) => (
          <div key={category} className="max-w-8xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-black text-center italic uppercase underline">
              {category} Section
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="p-4 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
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
                      img.src = item.image;
                      img.className =
                        "w-[500px] h-[500px] object-cover rounded-lg";

                      modal.appendChild(img);
                      document.body.appendChild(modal);
                    }}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <hr className="border-t border-gray-300 my-2" />{" "}
                  {/* Divider line */}
                  <div className="text-right flex justify-end items-center">
                    <span className="font-bold text-lg text-black italic">
                      Rs. {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
