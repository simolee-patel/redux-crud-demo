import UserActionTypes from "./todo.types";

export const setCurrentTodo=item=>({
    type:UserActionTypes.SET_CURRENT_TODO,
    payload:item
});