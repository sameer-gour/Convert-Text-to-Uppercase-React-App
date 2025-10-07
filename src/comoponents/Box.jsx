import React, { useState } from "react";

function Box() {
  const [text, setText] = useState("type Here");

  const handleOnChange = (e) => {
    console.log("input:", e.target.value);
    setText(e.target.value);
  };

  const uppercase = () => {
    setText(text.toUpperCase());
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Convert to uppercase</h2>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <div className="flex justify-end space-x-3 mt-4">
          <button
            onClick={() => setText("")}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            🗑️
          </button>
          <button
            onClick={uppercase}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Convert 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
