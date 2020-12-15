import UserActionTypes from "./todo.types";

export const setCurrentTodo=item=>({
    type:UserActionTypes.SET_CURRENT_TODO,
    payload:item
});

export const submitCurrentTodo=item=>({
    type:UserActionTypes.SUBMIT_CURRENT_TODO,
    payload:item
});

export const toggleChecked=key=>({
    type:UserActionTypes.TOGGLE_CHECKED,
    payload:key
});

export const deleteTodo=id=>({
    type:UserActionTypes.DELETE_TODO,
    payload:id
});
export const statusChecked=()=>({
    type:UserActionTypes.TOGGLE_STATUS,
});

export const completeTodo=(key)=>({
    type:UserActionTypes.COMPLETE_TODO,
    payload:key
})

export const inputClear=()=>({
    type:UserActionTypes.ACTION_CLEAR_TODO,

});
