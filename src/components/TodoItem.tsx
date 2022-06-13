import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { Todo } from '../app/types'
import { deleteTodo, isActive } from '../features/todoSlice'

const TodoItem: React.FC<Todo> = ({ id, text, active }) => {
	const dispatch = useAppDispatch()

	return (
		<div
			className={`todo todo-active--${active}`}
			onClick={() => dispatch(isActive(id))}
			onDoubleClick={() => dispatch(deleteTodo(id))}
		>
			{text}
		</div>
	)
}

export default TodoItem
