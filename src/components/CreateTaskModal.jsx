import React, { useState } from "react";
import { createTask } from "../services/taskService";
import { useAuth } from "../context/AuthContext";
import { serverTimestamp } from "firebase/firestore";

const CreateTaskModal = ({ close }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    await createTask({
      title,
      status: "todo",
      dueDate,
      userId: user.uid,
      createdAt: serverTimestamp(),
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-96 p-6 animate-fadeIn">

        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Task
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Add a task to your board
          </p>
        </div>

        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Task Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setTitle(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Due Date <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 rounded-lg border text-gray-600
                         hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white
                         hover:bg-indigo-700 transition shadow-sm"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
