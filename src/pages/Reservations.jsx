import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const navigate = useNavigate();

  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push(new Date(d));
    }
    return days;
  };

  const next7Days = getNext7Days();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  const timeSlots = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM",
  ];

  const defaultTables = [
    { id: 1, seats: 2, isReserved: true },
    { id: 2, seats: 2, isReserved: true },
    { id: 3, seats: 4, isReserved: false },
    { id: 4, seats: 4, isReserved: false },
    { id: 5, seats: 6, isReserved: false },
    { id: 6, seats: 6, isReserved: false },
    { id: 7, seats: 8, isReserved: false },
    { id: 8, seats: 8, isReserved: false },
  ];

  const formatDateButton = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatDateISO = (date) => date.toISOString().split("T")[0];

  const handleReserveClick = (table) => {
    if (!selectedDate) return alert("Please select a date first!");
    if (!selectedTime) return alert("Please select a time slot first!");
    if (table.isReserved) return alert("This table is already reserved!");

    navigate("/reservation-form", {
      state: {
        date: selectedDate,
        time: selectedTime,
        tableId: table.id,
        seats: table.seats,
      },
    });
  };

  return (
    <div className="min-h-screen pt-8 p-4 sm:p-8 md:p-16 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <hr className="w-1/2 mx-auto border-2 border-black" />
    <h1
      className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-bold text-center my-8 sm:my-10"
    >
      Table Reservations
    </h1>
    <hr className="w-1/2 mx-auto border-2 border-black mb-12" />
    

        <div className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black">
            Select Date *
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {next7Days.map((date) => {
              const isoDate = formatDateISO(date);
              return (
                <button
                  key={isoDate}
                  onClick={() => {
                    setSelectedDate(isoDate);
                    setSelectedTime("");
                    setSelectedTable(null);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-md font-medium text-sm sm:text-base ${
                    selectedDate === isoDate
                      ? "bg-blue-900 text-white"
                      : "bg-white border border-gray-300 hover:bg-blue-900 hover:text-white"
                  } transition duration-300`}
                >
                  {formatDateButton(date)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black">
            Select Time Slot *
            <p className="text-xs mt-1">
              (Select a time to see available tables for {selectedDate || "date"})
            </p>
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => {
                  if (!selectedDate) return alert("Please select a date first!");
                  setSelectedTime(time);
                  setSelectedTable(null);
                }}
                className={`px-3 sm:px-4 py-2 rounded-md font-medium text-sm sm:text-base ${
                  selectedTime === time
                    ? "bg-blue-900 text-white"
                    : "bg-white border border-gray-300 hover:bg-blue-900 hover:text-white"
                } transition duration-300`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-black text-center">
            {selectedDate && selectedTime
              ? `Available Tables for ${selectedDate} at ${selectedTime}`
              : "Select a date and time to see available tables"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {selectedDate && selectedTime ? (
              defaultTables.map((table) => (
                <div
                  key={table.id}
                  className={`p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center justify-center
                    ${
                      table.isReserved
                        ? "bg-red-100 cursor-not-allowed text-red-600"
                        : "bg-white cursor-pointer hover:shadow-lg"
                    }
                  `}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Table {table.id}</h3>
                  <p className="mb-2 text-sm sm:text-base">{table.seats} Seats</p>
                  <p className="mb-3 font-semibold">
                    {table.isReserved ? "Reserved" : "Available"}
                  </p>
                  {!table.isReserved && (
                    <button
                      onClick={() => handleReserveClick(table)}
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-green-600 transition text-sm sm:text-base"
                    >
                      Reserve Now
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-600">
                Please select date and time to see tables
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-900 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-red-500 rounded"></div>
            <span>Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
