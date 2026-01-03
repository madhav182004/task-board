import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useAuth } from "../context/AuthContext";
import {
  listenToUserTasks,
  updateTaskStatus,
} from "../services/taskService";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const statusStyles = {
  todo: "bg-blue-100 text-blue-700",
  "in-progress": "bg-yellow-100 text-yellow-700",
  done: "bg-green-100 text-green-700",
};

const statusLabel = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

const TaskBoard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = listenToUserTasks(user.uid, setTasks);
    return () => unsubscribe();
  }, [user]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    updateTaskStatus(draggableId, destination.droppableId);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {columns.map((col) => (
          <Droppable droppableId={col.id} key={col.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-50 p-4 rounded-xl min-h-96 border hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                    {col.title}
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                        {tasks.filter(t => t.status === col.id).length}
                    </span>
                </h3>

                {tasks
                  .filter((t) => t.status === col.id)
                  .map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`bg-white rounded-lg p-4 mb-3 border
                        shadow-sm hover:shadow-md transition
                        cursor-grab active:cursor-grabbing
                        ${snapshot.isDragging ? "scale-105 shadow-lg" : ""}
                        `}
                        >
                        <p className="font-semibold text-gray-800 mb-1">
                            {task.title}
                        </p>

                        {task.dueDate && (
                            <p className="text-xs text-gray-500 mb-2">
                            📅 Due: {task.dueDate}
                            </p>
                        )}

                        <div className="mt-2">
                            <span
                            className={`text-xs px-2 py-1 rounded-full font-medium
                                ${statusStyles[task.status]}
                            `}
                            >
                            {statusLabel[task.status]}
                            </span>
                        </div>
                        </div>
                    )}
                    </Draggable>
                  ))}

                {provided.placeholder}

                {tasks.filter((t) => t.status === col.id).length === 0 && (
                  <p className="text-sm text-gray-500">No tasks</p>
                )}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
