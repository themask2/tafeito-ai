import axios from "axios";
import { useEffect, useState } from "react";
import Task from "../Task";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TaskListWrapperProps, TaskListProps } from "./TaskList";
import TaskInput from "../TaskInput";
import { Tarefa } from "../../utils/model";
import { useGlobalContext } from "../../utils/global";
import { url_tasks } from "../../utils/api";
import { Box } from "@mui/material";

import { usePreviousValue } from "../../utils/hooks";

const TaskList = (props: TaskListProps) => {

  const { tasks, categoria } = props;

  const [editTaskId, setEditTaskId] = useState<null | number>(null);
  const { setIsEditingTask } = useGlobalContext();

  const renderTasks = () => {
    return tasks.map((task) => {

      return (
        <Box key={task.id}>
          {task.id === editTaskId ? (
            <TaskInput
              cancelTask={() => {
                setEditTaskId(null);
                setIsEditingTask(false);
              }}
              submitTask={() => {
                setEditTaskId(null);
                setIsEditingTask(false);
              }}
              category={categoria}
              task={task}
            />
          ) : (
            <Task
              task={task}
              onTaskChange={(taskId) => {
                setEditTaskId(taskId);
              }}
            />
          )}
        </Box>
      );
    });
  };
  return (
    <Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {renderTasks()}
      </List>
    </Box>
  );
};

const TaskListWrapper = (props: TaskListWrapperProps) => {
  const { categoria, taskStatus } = props;
  const [tasks, setTasks] = useState<Tarefa[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const prevTaskStatus = usePreviousValue(taskStatus);

  const fetchtasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url_tasks);
      const category_tasks = response.data
        .filter((task: Tarefa) => task.id_categoria === categoria.id)
        .sort((a:Tarefa, b:Tarefa) => {
          return a.id - b.id;
        });
      setTasks(category_tasks);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading === false && prevTaskStatus !== taskStatus) {
      console.log(taskStatus);
      fetchtasks();
    }
  }, [taskStatus]);

  useEffect(() => {
    if (loading === false) {
      fetchtasks();
    }
  }, []);

  return <TaskList tasks={tasks} categoria={categoria} />;
};

export default TaskListWrapper;