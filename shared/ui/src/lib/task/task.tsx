import classNames from "classnames"
import { useStore } from "../../../../../src/app/store"

/* eslint-disable-next-line */
export interface TaskProps {
  title: any;
}

export function Task({title}: TaskProps) {
  
  const task = useStore((store) => (store.tasks.find((task) => task.title === title))) as any

  const setDraggedTask = useStore((store) => store.setDraggedTask)
  const deleteTask = useStore(store => store.deleteTask)

  return (
    <div className="flex flex-col bg-blue-200 cursor-move"
      draggable
      onDragStart={() => {setDraggedTask(task.title)}}
    >
      <div>{title}</div>
      <div className="flex">
        <button onClick={() => deleteTask(task.title)}>delete</button>
        <div className={classNames('status', task!.state)}>{task!.state}</div>
      </div>
    </div>
  );
}

export default Task;
