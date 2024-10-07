import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Tabs = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // get data from server
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const sortedtasks = [...tasks].sort((a, b) => a.completed - b.completed);

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const filteredTasks = () => {
    if (activeTab === "done")
      return sortedtasks.filter((task) => task.completed);
    if (activeTab === "todos")
      return sortedtasks.filter((task) => !task.completed);
    return sortedtasks;
  };
  return (
    <div className="flex flex-col justify-center mt-6 gap-3">
      <div className="py-4 gap-2 flex flex-col">
        <h2 className="text-white text-2xl font-semibold">Tasks</h2>
        <div className="w-full h-[1px] bg-white"></div>
      </div>
      <div className="flex text-white justify-center gap-2">
        <button
          className={`tabsbtn rounded-l-md ${
            activeTab === "all" ? "active" : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`tabsbtn ${activeTab === "done" ? "active" : ""}`}
          onClick={() => setActiveTab("done")}
        >
          Done
        </button>
        <button
          className={`tabsbtn rounded-r-md ${
            activeTab === "todos" ? "active" : ""
          }`}
          onClick={() => setActiveTab("todos")}
        >
          Todos
        </button>
      </div>
      <div id={activeTab}>
        {filteredTasks().map((task) => (
          <div
            className="flex gap-6 items-center justify-around mx-6 py-4"
            key={task.id}
          >
            <div className="checkbox-wrapper-15">
              <input
                className="inp-cbx hidden"
                id={task.id}
                type="checkbox"
                checked={task.completed}
                onClick={() => {
                  toggleCompletion(task.id);
                }}
              />
              <label className="cbx" for={task.id}>
                <span>
                  <svg width="30px" height="26px" viewbox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                  </svg>
                </span>
              </label>
            </div>
            <div className="bg-white rounded-md w-full px-3 py-1">
              <p className="text-xl font-semibold">{task.description}</p>
            </div>
            <div className="bg-red-700 p-2 rounded-full">
              <MdDelete className="text-white text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
