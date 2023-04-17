import  {createSlice}  from  '@reduxjs/toolkit' ;

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const value = action.payload;

            if(!value.trim().length){
                alert ('El campo esta vacío')
            } else if (state.some((item) => item.task === value)) {
                alert ('La tarea ya existe')
            } else {
                state.push({name: value, id: Date.now() })
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        deleteTask: (state, action) => {
            const name = action.payload.name
            if (window.confirm(`Está seguro de eliminar la tarea ${name}?`)) {
                const updatedState = state.filter((item) => item.id !== action.payload.id);
                localStorage.setItem("tasks", JSON.stringify(updatedState));
                return updatedState;
            }
        },
        deleteAllTasks: (state) => {
            if (window.confirm('Está seguro de eliminar todas las tareas?')) {
                const updatedState = [];
    localStorage.setItem("tasks", JSON.stringify(updatedState));
    return updatedState;
            }
        } 
    }
})

export const { addTask, deleteTask, deleteAllTasks } = taskSlice.actions;
export default taskSlice.reducer;
