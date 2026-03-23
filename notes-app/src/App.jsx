import React from "react";
import { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const coppTask = [...task];

    coppTask.push({ title, details });
    settask(coppTask);

    settitle("");
    setdetails("");
  };

  const [title, settitle] = useState("");
  const [details, setdetails] = useState(" ");

  const [task, settask] = useState([]);

  return (
    <div className="bg-black h-screen text-white lg:flex ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="flex  items-start gap-4 flex-col  p-10 lg:w-1/2"
        f
      >
        <h1 className="text-3xl font-bold text-white">Your Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 rounded outline-none font-medium "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full py-2 h-32 border-2 rounded outline-none font-medium "
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />

        <button className="bg-white w-full text-black px-5 py-2 rounded  outline-none font-medium">
          Add Note
        </button>
      </form>
      <div className="flex  p-10 bg-grey-900 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-bold text-white">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 rounded-xl text-black p-4"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-500">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
