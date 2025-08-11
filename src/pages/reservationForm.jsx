import  { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const outletOptions = ["Sector-15", "Sector-20", "Sector-45", "Sector-60"];
const personsOptions = ["2", "3", "4", "5+"];
const customizationOptions = [
  "Window Seat",
  "High Chair",
  "Outdoor Seating",
  "Birthday Setup",
  "Anniversary Setup",
  "Date Setup",
  "Other",
];

function convertTo24Hour(time12h) {
  if (!time12h) return "";
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours, 10);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

const ReservationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { date, time, tableId, seats } = location.state || {};

  useEffect(() => {
    if (!date || !time || !tableId) {
      alert("Please select date, time, and table before making a reservation.");
      navigate("/reservations");
    }
  }, [date, time, tableId, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: date || "",
    time: time || "",
    outlet: "",
    persons: "",
    customization: "", 
    tableId: tableId || "",
    seats: seats || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedTime = convertTo24Hour(formData.time);

      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.date ||
        !formattedTime ||
        !formData.outlet ||
        !formData.persons
      ) {
        alert("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        date: formData.date,
        time: formattedTime,
        outlet: formData.outlet,
        persons: formData.persons,
        customization: formData.customization.trim() || "", 
      };
  

      const response = await fetch(
        `${import.meta.env.VITE_API_BOOKING_API}/api/reservations`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create reservation.");
      }

      alert(data.message || "Reservation successful!");
      navigate("/reservations");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting reservation: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white shadow-md rounded-lg max-w-2xl w-full"
      >
        <hr className="border-2 border-black" />
        <br />
        <h2 className="text-5xl font-bold mb-6 text-center">✦ Make a Reservation ✦</h2>
        <hr className="border-2 border-black" />
        <br />

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            disabled
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">Time</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            disabled
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">
            Choose Outlet <span className="text-red-600">*</span>
          </label>
          <select
            name="outlet"
            value={formData.outlet}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          >
            <option value="">-- Select Outlet --</option>
            {outletOptions.map((outlet) => (
              <option key={outlet} value={outlet}>
                {outlet}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">
            Number of Persons <span className="text-red-600">*</span>
          </label>
          <select
            name="persons"
            value={formData.persons}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          >
            <option value="">-- Select Persons --</option>
            {personsOptions.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <p className="text-gray-600 text-sm mt-1">
            Max {formData.seats} persons for Table {formData.tableId}.
          </p>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">
            Customization (optional)
          </label>
          <select
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          >
            <option value="">-- Select Customization --</option>
            {customizationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-lg text-black">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="1234567890"
            pattern="\d{10}"
            required
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          />
          <small className="text-gray-600">Enter 10-digit phone number</small>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 text-white font-bold py-3 rounded-md hover:bg-green-600 transition"
        >
          {loading ? "Submitting..." : "Submit Reservation"}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
