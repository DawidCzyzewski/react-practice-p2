import styles from "./TaskCounter.module.css";
import { useTask } from "../../contexts/taskContext";

export const TaskCounter = () => {
  const { tasksActive, tasksCompleted } = useTask();

  return (
    <div>
      <p className={styles.text}>Active: {tasksActive.length}</p>
      <p className={styles.text}>Completed: {tasksCompleted.length}</p>
    </div>
  );
};
