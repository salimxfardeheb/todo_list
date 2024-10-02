import React from "react";
import { MdDelete } from "react-icons/md";

const tabs = () => {
  return (
    <div className="mx-7 flex flex-col justify-center mt-6 gap-3">
      <h2 className="text-white text-2xl font-semibold">Tasks</h2>
      <div className="flex text-white justify-center gap-2">
        <button className="tabsbtn rounded-l-md">All</button>
        <button className="tabsbtn">Done</button>
        <button className="tabsbtn rounded-r-md">Todos</button>
      </div>
      <div id="all">{/*all tasks */}</div>
      <div id="done">
        {/*tasks done*/}
        <div className="flex gap-6 items-center justify-around mx-6">
        <div class="checkbox-wrapper-15 inline-block align-middle translate ">
            <input
              class="inp-cbx hidden"
              id="cbx-15"
              type="checkbox"

            />


            <label class="cbx" for="cbx-15">
              <span>
                <svg width="30px" height="26px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
            </label>
          </div>
          <div className="bg-white rounded-md w-full px-3 py-1"><p className="text-xl font-semibold">task title</p></div>
          <div className="bg-red-700 p-2 rounded-full"><MdDelete className="text-white text-2xl"/></div>
        </div>
      </div>
      <div id="todos">{/*tasks todo */}</div>
    </div>
  );
};

export default tabs;
