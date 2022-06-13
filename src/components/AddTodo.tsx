import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Todo } from '../app/types'
import { useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todoSlice'

type FormValues = {
	todo: string
}

const AddTodo: React.FC = () => {
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = data => {
		const todo: Todo = {
			id: uuidv4(),
			text: data.todo,
			active: true,
		}
		dispatch(addTodo(todo))
		reset({ todo: '' })
	}

	return (
		<section className="add-todo">
			<form className="add-todo__form" onSubmit={handleSubmit(onSubmit)}>
				<input
					className="add-todo__input"
					type="text"
					placeholder="Add todo here..."
					autoFocus
					{...register('todo', { required: true })}
				/>
			</form>
			{errors?.todo && <p className="add-todo__error">The field is required to fill in</p>}
		</section>
	)
}

export default AddTodo
