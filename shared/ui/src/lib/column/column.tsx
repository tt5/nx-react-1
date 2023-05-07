import { shallow } from "zustand/shallow";
import Task from "../task/task";
import { useStore } from "../../../../../src/app/store"
import {useState} from "react"
import classNames from "classnames";


/* eslint-disable-next-line */
interface Props {
  state: any
}

export function Column({ state }: Props) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore(
    (store: any) => store.tasks.filter((task: any) => task.state === state),
    shallow
  )

  const addTask = useStore((store) => store.addTask)
  const setDraggedTask = useStore((store) => store.setDraggedTask)
  const draggedTask = useStore((store) => store.draggedTask)
  const moveTask = useStore((store) => store.moveTask)

  return (
    <div
      className={classNames("flex flex-col gap-2 w-1/3 bg-orange-50 border border-white", {drop: drop})}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault()
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault()
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <div className="flex items-center gap-2">
        <p>{state}</p>
        <button onClick={() => {setOpen(true)}}>Add</button>
      </div>
      {tasks.map((task: any) => (
        <Task title={task.title} key={task.title}/>
      ))}
      {open && (
      <div>
        <div>
          <input onChange={(e) => setText(e.target.value)} value={text}/>
          <button
            onClick={() => {
              addTask(text, state);
              setText('');
              setOpen(false);
            }}
          >Submit</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Column;
