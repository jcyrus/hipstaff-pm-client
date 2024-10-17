import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div 
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {task.attachments && task.attachments.length > 0 && (
        <Image
          src={`/${task.attachments[0].fileURL}`}
          alt={task.attachments[0].fileName}
          width={400}
          height={400}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>ID:</strong> {task.id}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Description:</strong>{" "}
          {task.description || "No description provided"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Status:</strong> {task.status}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Priority:</strong> {task.priority}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Tags:</strong> {task.tags || "No tags"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Start Date:</strong>{" "}
          {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Due Date:</strong>{" "}
          {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Author:</strong>{" "}
          {task.author ? task.author.username : "Unknown"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Assignee:</strong>{" "}
          {task.assignee ? task.assignee.username : "Unassigned"}
        </p>
      </div>
      
    </div>
  );
};

export default TaskCard;