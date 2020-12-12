import UserActionTypes from './todo.types';

const INITIAL_STATE={
    currentItem:'anything',
};

const TodoReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_TODO:
            return{
                ...state,
                currentItem:action.payload
            };
            
    
        default:
            return state;
    }
};

export default TodoReducer;