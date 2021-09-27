import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleCompleteClick = () => {
    dispatch(
      toggleCompleteAsync({
        id,
        completed: !completed
      })
    )
  }

  const handleDelete = () => {
    dispatch(
      deleteTodoAsync({ id })
    )
  }

  return (
    <li
      key={id}
      className={`list-group-item ${completed && 'list-group-item-success'}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          />
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
