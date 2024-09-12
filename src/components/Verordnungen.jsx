import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import arrow from "/arrow.png";

const Verordnungen = () => {
  const [values, setValues] = useState([
    {
      name: "Meier, Hans",
      current: 0,
      total: 408.01,
      color: "bg-white",
      colors: {
        10: "bg-red-500",
        30: "bg-[#a8bf00]",
        60: "bg-[#fff027]",
        80: "bg-[#ff7927]",
        100: "bg-[#f05b56]",
      },
    },
    {
      name: "Müller, Erika",
      current: 0,
      total: 867.28,
      color: "bg-white",
      colors: {
        30: "bg-[#22d3ee]",
        60: "bg-[#3b82f6]",
        80: "bg-[#8b5cf6]",
        100: "bg-[#f472b6]",
      },
    },
    {
      name: "Schmidt, Elisabeth",
      current: 0,
      total: 408.01,
      color: "bg-white",
      colors: {
        30: "bg-[#facc15]",
        60: "bg-[#fb923c]",
        80: "bg-[#ef4444]",
        100: "bg-[#991b1b]",
      },
    },
    {
      name: "Fischer, Werner",
      current: 0,
      total: 199.5,
      color: "bg-white",
      colors: {
        30: "bg-white",
        60: "bg-white",
        80: "bg-[#6ee7b7]",
        100: "bg-[#d1fae5]",
      },
    },
  ]);

  useEffect(() => {
    const intervals = values.map((person, index) => {
      let currentValue = 0;
      return setInterval(() => {
        currentValue += person.total / 100; // Increment value

        let newColor = "bg-white"; // Default color (white)

        // Get color based on percentage
        if (currentValue >= person.total * 0.8) {
          newColor = person.colors[100];
        } else if (currentValue >= person.total * 0.6) {
          newColor = person.colors[80];
        } else if (currentValue >= person.total * 0.3) {
          newColor = person.colors[60];
        } else {
          newColor = person.colors[30];
        }

        // Ensure it doesn't exceed total value
        if (currentValue >= person.total) {
          currentValue = person.total;
          clearInterval(intervals[index]); // Stop animation when target is reached
        }

        // Update the values array with the new values and color
        setValues((prevValues) =>
          prevValues.map((p, i) =>
            i === index ? { ...p, current: currentValue, color: newColor } : p
          )
        );
      }, 30); // Speed of the animation (you can adjust this)
    });

    // Cleanup function to clear intervals when component unmounts
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center overflow-hidden text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] p-6 lg:px-20 xl:py-12 h-full">
        <h1 className="text-5xl lg:text-8xl mt-4 lg:mt-8 mb-4 lg:mb-8">
          Verordnungen
        </h1>
        <p className="text-lg lg:text-3xl mb-1 w-3/3">
          Jahresverbrauch stets im Blick behalten. Rezeptvorlagen automatisch
          erstellen lassen. Rezepte hochladen und Bewohnern zuordnen. Ganz
          einfach.
        </p>
        <div className="mt-6 lg:mt-10">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> MiGeL-Barometer
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Rezeptmanagement
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Automatische
              Vorlagen
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" />{" "}
              Benachrichtigungen (Apotheke)
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] lg:relative flex justify-center items-center lg:justify-end">
        <div className="p-6 w-full rounded-lg absolute -left-20 -skew-x-6">
          <div className="bg-gradient-to-r from-[#abbc33] to-[#abbc33]/50 text-white border border-white py-2 px-4 rounded-t-lg font-bold text-lg">
            Abteilung B
          </div>
          <div className="bg-white shadow-lg p-4 rounded-b-lg">
            {values.map((person, index) => (
              <div
                key={index}
                className="flex justify-between text-black items-center py-2"
              >
                <span>{person.name}</span>
                <div className="w-48 h-6 bg-gray-300 rounded-lg relative overflow-hidden">
                  {/* Background bar */}
                  <div
                    className={`absolute top-0 left-0 h-full ${person.color}`}
                    style={{
                      width: `${(person.current / person.total) * 100}%`,
                    }}
                  />
                  {/* Value text */}
                  <div className="absolute inset-0 flex items-center justify-center text-black font-medium">
                    CHF {person.current.toFixed(2)} / CHF{" "}
                    {person.total.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-end mt-4">
            <button className="bg-white hover:bg-black hover:text-white text-gray-700 py-2 px-4 rounded-lg shadow-lg hover:shadow-md">
              Rezeptvorlage erstellen
            </button>
            {/* CSS Arrow */}
            <img
              className="absolute -bottom-4 -right-8 w-20"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verordnungen;
