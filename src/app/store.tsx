import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'
import {produce} from 'immer'

const store = (set: any) => ({
  tasks: [{title: 'testTask', state: 'ONGOING'}],
  draggedTask: null,
  addTask: (title: any, state: any) =>
    set(
      produce((store: any) => {
        store.tasks.push({title, state})
      }),
      false,
      'addTask'
    ),
  deleteTask: (title: any) =>
    set(
      (store: any) => ({tasks: store.tasks.filter(
        (task: any) => task.title !== title
      )})
    ),
  setDraggedTask: (title: string | null) => set({draggedTask: title}),
  moveTask: (title: any, state: any) => set((store: any) => ({
    tasks: store.tasks.map((task: any) => (task.title === title ? {title, state} : task))
  }))

})

export const useStore = create(persist(devtools(store), {name: "store"}));
