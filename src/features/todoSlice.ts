import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, Todos } from '../app/types'

const initialState: Todos = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    isActive: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, active: !todo.active}
        }
        return todo
      })
    }
  }
})

export const { addTodo, deleteTodo, isActive } = todoSlice.actions
export default todoSlice.reducer