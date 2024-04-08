import { TaskAuthor, TaskDate, TaskDetails, TaskName, TaskWrapper } from "./styled";

const Task = ({ task }) => {
  return (
    <TaskWrapper key={task.task_id}>
      <TaskDetails>
        <TaskName>Task: {task.task_name}</TaskName>
        <TaskDate>Created at: {task.created_date}</TaskDate>
        <TaskDate>Deadline: {task.deadline}</TaskDate>
      </TaskDetails>
      <TaskAuthor>Author: {task.author}</TaskAuthor>
    </TaskWrapper>
  )
}

export default Task;