import React from 'react'
import { useAppSelector } from '../app/hooks'
import TodoItem from './TodoItem'

const TodoList = () => {
	const todos = useAppSelector(state => state.todoSlice.todos)

	return (
		<>
			{todos.map(todo => (
				<TodoItem key={todo.id} id={todo.id} text={todo.text} active={todo.active} />
			))}
		</>
	)
}

export default TodoList
