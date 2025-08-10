import { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fallback in case env var is missing — avoid hitting empty string or undefined URL
  const API_URL = import.meta.env.VITE_API_URL || "https://rest-menuapi.onrender.com/api/menu";

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!API_URL) throw new Error("API URL not configured");

        const response = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("API response is not an array");
        }

        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [API_URL]);

  // Group menu items safely — empty array fallback
  const groupedMenuItems = menuItems.reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // UI states for loading and error
  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading menu...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">Failed to load menu: {error}</div>;
  }

  if (menuItems.length === 0) {
    return <div className="text-center mt-10 text-gray-600">No menu items found.</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-20 px-2 px-10">
        <hr className="w-1/2 mx-auto border-2 border-black" />
        <br />
        <h1 className="text-6xl font-bold text-center mb-8 text-black">
          🍽️ Our Menu 🍽️
        </h1>
        <hr className="w-1/2 mx-auto border-2 border-black" />
        <br />

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
                  <hr className="border-t border-gray-300 my-2" />
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
