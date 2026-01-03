import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const tasksRef = collection(db, "tasks");

export const createTask = (task) => {
  return addDoc(tasksRef, task);
};

export const updateTaskStatus = (taskId, status) => {
  const taskRef = doc(db, "tasks", taskId);
  return updateDoc(taskRef, { status });
};

export const listenToUserTasks = (userId, callback) => {
  const q = query(tasksRef, where("userId", "==", userId));

  return onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(tasks);
  });
};
