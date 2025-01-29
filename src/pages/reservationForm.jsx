import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    outlet: "",
    persons: "",
    customization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePersonChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, persons: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://resto-reservations.onrender.com/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      alert(data.message); // Success message
  
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        outlet: "",
        persons: "",
        customization: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting reservation! Please try again later.");
    }
  };
  
  

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white shadow-md rounded-lg max-w-2xl w-full"
      >
        <hr className="border-2 border-black" />
        <br />
        <h2 className="text-5xl font-bold mb-6 text-center">
          ✦ Make a Reservation ✦
        </h2>
        <hr className="border-2 border-black" />
        <br />
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {/* Date Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {/* Time Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleTimeChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          >
            {Array.from({ length: 24 }, (_, hour) => {
              const formattedHour = String(hour).padStart(2, "0");
              return (
                <>
                  <option
                    key={`${formattedHour}:00`}
                    value={`${formattedHour}:00`}
                  >
                    {formattedHour}:00
                  </option>
                  <option
                    key={`${formattedHour}:30`}
                    value={`${formattedHour}:30`}
                  >
                    {formattedHour}:30
                  </option>
                </>
              );
            })}
          </select>
        </div>
        {/* Outlet Selection Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Outlet</label>
          <select
            name="outlet"
            value={formData.outlet}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="" disabled>
              Select an outlet
            </option>
            <option value="Sector-15">Sector-15</option>
            <option value="Sector-20">Sector-20</option>
            <option value="Sector-45">Sector-45</option>
            <option value="Sector-60">Sector-60</option>
          </select>
        </div>
        {/* Number of Persons (Radio Button Selection) */}
        <div className="mb-4">
          <label className="block text-gray-700">Number of Persons</label>
          <div className="flex gap-2 mt-2">
            {["1", "2", "3", "4+"].map((person) => (
              <label key={person} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="persons"
                  value={person}
                  checked={formData.persons === person}
                  onChange={handlePersonChange}
                  className="w-4 h-4"
                />
                {person}
              </label>
            ))}
          </div>
        </div>
        {/* Customization Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Customization</label>
          <select
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="" disabled>
              Select customization
            </option>
            <option value="Window Seat">Window Seat</option>
            <option value="High Chair">High Chair</option>
            <option value="Outdoor Seating">Outdoor Seating</option>
            <option value="Birthday Setup">Birthday Setup</option>
            <option value="Anniversary Setup">Anniversary Setup</option>
            <option value="Date Setup">Date Setup</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>      </form>    </div>
  );
};

export default ReservationForm;
