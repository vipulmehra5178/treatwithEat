//done

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const timeSlots = [
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  // Mock data for table availability at different times
  const tableAvailability = {
    "11:00 AM": [
      { id: 1, seats: 2, isReserved: false },
      { id: 2, seats: 2, isReserved: false },
      { id: 3, seats: 4, isReserved: false },
      { id: 4, seats: 4, isReserved: false },
      { id: 5, seats: 6, isReserved: false },
      { id: 6, seats: 6, isReserved: false },
      { id: 7, seats: 8, isReserved: false },
      { id: 8, seats: 8, isReserved: false },
    ],
    // Add similar data for other time slots...
  };

  // Default table state when no time is selected
  const defaultTables = [
    { id: 1, seats: 2, isReserved: false },
    { id: 2, seats: 2, isReserved: false },
    { id: 3, seats: 4, isReserved: false },
    { id: 4, seats: 4, isReserved: false },
    { id: 5, seats: 6, isReserved: false },
    { id: 6, seats: 6, isReserved: false },
    { id: 7, seats: 8, isReserved: false },
    { id: 8, seats: 8, isReserved: false },
  ];

  // Get tables based on selected time
  const getTablesForTime = (time) => {
    return tableAvailability[time] || defaultTables;
  };

  const handleReserveClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/reservations");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
        <hr className="w-1/2 mx-auto border-2 border-black"></hr>
          <br />
          <h1 className="text-6xl font-bold text-center mb-12">
            Table Reservations
          </h1>
          <hr className="w-1/2 mx-auto border-2 border-black"></hr>
          <br />
          {/* Time Selection */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Select Time Slot *
              <br />
              <p className="text-xs">(Select a time to see available tables)</p>
            </h2>
            <div className="flex flex-wrap gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-md ${
                    selectedTime === time
                      ? "bg-blue-900 text-white"
                      : "bg-white/80 hover:bg-blue-900 text-center hover:text-white"
                  } transition duration-300`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Table Layout */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">
              {selectedTime
                ? `Available Tables for ${selectedTime}`
                : "Select a time to see available tables"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {getTablesForTime(selectedTime).map((table) => (
                <div
                  key={table.id}
                  className={`p-6 rounded-lg shadow-md ${
                    table.isReserved
                      ? "bg-red-100 cursor-not-allowed"
                      : "bg-white/80 hover:shadow-lg cursor-pointer"
                  } transition`}
                >
                  <div className="text-center">
                    <h3 className="text-l font-medium mb-2">
                      Table {table.id}
                    </h3>
                    <p className="text-gray-600 mb-2">{table.seats} Seats</p>
                    <p
                      className={`font-semibold ${
                        table.isReserved ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {table.isReserved ? "Reserved" : "Available"}
                    </p>
                    {!table.isReserved && selectedTime && (
                      <button
                        onClick={handleReserveClick}
                        className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-green-600 transition"
                      >
                        Reserve Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-900 rounded mr-2"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
              <span>Reserved</span>
            </div>
          </div>

          {/* Popup */}
          {showPopup && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50">
              <p className="text-lg font-semibold text-[#964B00]">
                Redirecting to booking page...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
