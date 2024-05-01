import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todoinput: "",
    updateTodo: null,
    todos: []
}



export const todoSlice = createSlice({
    name: 'Vishal Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                email: action.payload
            }
            state.todos.push(todo);
            state.updateTodo = null;
            state.todoinput = "";
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>{
                console.log("=-=-=--=-=>",todo.id !== action.payload , todo.id , action.payload)
                 return todo.id !== action.payload
        });
           
            state.updateTodo = null;
            state.todoinput = "";
        },
        editTodo: (state, action) => {
            const id = action.payload;
            const todoedit = state.todos.find((todo) => todo.id === id);
            // const todoedit = state.todos[index];

            if (todoedit) {
                state.updateTodo = todoedit;
                state.todoinput = todoedit.text;
            }
        },
        // for handling changes on input field
        handleChange: (state, action) => {
            console.log("action handle change =-=-=--=-=-=-=-=-=>", action.type);
            const text = action.payload;
            state.todoinput = text
        },
        editSave: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    console.log(" action edit Save --------->Todoslice component ", id, action.type);
                    todo.text = text
                }
                return todo;

            })
            //for emptying values when user edited task
            state.todoinput = ""
            state.updateTodo = null
            console.log("------------------>TodoSlice component ", state.updateTodo);
        },
        cancelTodo: (state) => {
          state.updateTodo = null
          state.todoinput = ""

        },
        duplicateTodo : (state,action) => {
            const id = action.payload;
            console.log("id-=-=-", id)
            const duplicate = state.todos.find((todo) => todo.id === id);
            state.todos.push({
              id: nanoid(),
              text: duplicate.text,
            })
   
        }

    }
})

export const { addTodo, removeTodo, editSave, handleChange, editTodo, cancelTodo,duplicateTodo } = todoSlice.actions

export default todoSlice.reducer


