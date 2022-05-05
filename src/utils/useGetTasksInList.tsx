import { useState, useEffect } from "react";
import { TaskInterface } from "src/components/types";

export const useGetTasksInList = (columnList: string) => {
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);

  useEffect(() => {
    if (Math.random() > 0.5) {
      setTaskList([
        {
          id: "1",
          title: "Task 1",
          description:
            "blah blahblah blah blah blahblah blahbblah blahblah blahblah blah",
        },
        { id: "2", title: "Task 2" },
        { id: "3", title: "Task 3", description: "blah blah" },
      ]);
    } else {
      setTaskList([]);
    }
  }, []);

  return taskList;
};
