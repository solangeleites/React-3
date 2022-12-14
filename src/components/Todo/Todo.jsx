import React, { useContext, useState } from 'react'
import { ButtonForm, ContainerTareas, ContainerTodo, Form, InputForm, } from './TodoStyles'

import { TodoContext } from '../context/context'
const Todo = () => {
  const [value, setValue] = useState('')
  const ctx  = useContext(TodoContext)

  const onSubmit = (e) => {
    e.preventDefault()
    ctx.addTask(value)
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
          {ctx.taskList.map(task => (
            <p key={task.id}>
              {task.name} <span onClick={() => ctx.removeTask(task)}>×</span>
            </p>
          ))}

        </ContainerTareas>
        <ButtonForm onClick={() => ctx.removeAll()}>Borrar todas las tareas</ButtonForm>
    </ContainerTodo>
  )
}

export default Todo