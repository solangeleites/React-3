import React, { useState } from 'react'
import { ButtonForm, ContainerTareas, ContainerTodo, Form, InputForm, Delete} from './TodoStyles'
import {AiFillDelete} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, deleteAllTasks } from '../../features/taskSlice'
const ToDo = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const task = useSelector(state => state.task)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask(value))
    setValue('')
  }

  return (
    <ContainerTodo>
              <h2>ToDo List App</h2>
        <Form onSubmit={onSubmit}>
        <InputForm type='text' placeholder='Agregue aquí su tarea' value={value} onChange={e => setValue(e.target.value)}></InputForm>
        <ButtonForm>Agregar</ButtonForm>
        </Form>
        <ContainerTareas>
          {task.map(tasks => (
            <p key={tasks.id}>
              {tasks.name} <Delete onClick={() => dispatch(deleteTask(tasks))}></Delete>
            </p>
          ))}

        </ContainerTareas>
        <ButtonForm onClick={() => dispatch(deleteAllTasks())} task={task.length}>Borrar todas las tareas</ButtonForm>
    </ContainerTodo>
  )
}

export default ToDo