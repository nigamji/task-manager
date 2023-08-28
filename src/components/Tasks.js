// const tasks = [
//     { name: "Task 1", text: "Complete Task 1" },
//     { name: "Task 2", text: "Complete Task 2" },
//     { name: "Task 3", text: "Complete Task 3" }
// ]
import Task from "./Task"
const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks