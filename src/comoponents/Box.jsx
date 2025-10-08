import React, { useState } from "react";

function Box({dm,toggleMode}) {
  const [text, setText] = useState();

  const handleOnChange = (e) => {
    console.log("input:", e.target.value);
    setText(e.target.value);
  };

  const uppercase = () => {
    setText(text.toUpperCase());
  };

  const lowercase = () => {
    setText(text.toLowerCase());
  };
const capitalize = () => {
  setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
};

const temp = () => {
  setText(text.charAt(0).toLowerCase() + text.slice(1).toUpperCase());
};

const copy = () => {
  navigator.clipboard.writeText(text);
  alert("Text copied to clipboard!");
};


  return (
    <div className={` flex justify-center items-center h-[90.8vh] ${dm ? 'bg-zinc-900 text-white' : 'bg-white-100 text-black'}`}>
      <div className={` shadow-lg rounded-xl p-6  w-200 ${dm ? 'bg-zinc-800 text-white font-bold' : 'bg-white text-black'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${dm ? 'text-white' : 'text-black'}`}>Convert Case</h2>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={text}
          onChange={handleOnChange}
          placeholder="type here"
        ></textarea>

        <div className="flex justify-end space-x-3 mt-4">
          <button
            onClick={() => setText("")}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
           Clear 
          </button>
          <button
            onClick={uppercase}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            UPPERCASE
          </button>

          <button
            onClick={lowercase}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            lowercase
          </button>
          <button
            onClick={capitalize}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Camelcase
          </button>
          <button
            onClick={temp}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            aLTERNATINGCASE
          </button>

          <button
            onClick={copy}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
