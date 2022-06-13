import React, { useEffect } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import { useAppSelector } from './app/hooks'

const App: React.FC = () => {
	const todos = useAppSelector(state => state.todoSlice.todos)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<div className="container">
			<AddTodo />
			<TodoList />
		</div>
	)
}

export default App
