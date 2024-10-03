import React from "react";

const addtask = () => {
  return (
    <div className="flex justify-center mt-24">
      <form className="flex gap-2 w-full justify-center lg:mx-7">
        <input
          type="text"
          placeholder="Add new task"
          className="px-2 rounded-l-md max-w-56 lg:max-w-full lg:w-full placeholder:font-bold lg:p-3"
        />
        <button className="text-white font-bold gap-3 flex justify-center items-center px-8 py-1 bg-[#3C5E92] rounded-r-md hover:opacity-85">
          <svg
            className="w-4 lg:w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path fill="white" d="M31 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z" />
            <path
              fill="white"
              d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h10v-2H7V7h3v3h12V7h3v9h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
            />
          </svg>
          Add
        </button>
      </form>
    </div>
  );
};

export default addtask;
