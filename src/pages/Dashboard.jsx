import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import TaskBoard from "../components/TaskBoard";
import CreateTaskModal from "../components/CreateTaskModal";

const Dashboard = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        + Create Task
      </button>

      <TaskBoard />

      {open && <CreateTaskModal close={() => setOpen(false)} />}
    </div>
  );
};

export default Dashboard;
