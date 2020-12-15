import UserActionTypes from './todo.types';

const INITIAL_STATE={
    currentItem:'',
    list:[],
    
};

const toogleChecked=(existingList,id)=>{
    return existingList.map((item)=>{
        return item.id===id?{...item,isChecked:!item.isChecked}:item}
    );
};
const deleteTodo=(existingList, id)=>{
    const simpleList=existingList;
    const updatedList=simpleList.filter((item)=>{
        console.log(id);
        return item.id!==id;
    });
    return updatedList;
};
const completetodo=(existingList, id)=>{
    return existingList.map((item)=>{
        return item.id===id?{...item,status:!item.status}:item}
    );
};

const TodoReducer=(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case UserActionTypes.SET_CURRENT_TODO:
            return{
                ...state,
                currentItem:action.payload
            };
            
        case UserActionTypes.SUBMIT_CURRENT_TODO:
            return{
                ...state,
                list:[...state.list, action.payload]
            }
        case UserActionTypes.TOGGLE_CHECKED:
            return{
                ...state,
                list:toogleChecked(state.list,action.payload)
            }
        case UserActionTypes.DELETE_TODO:
            return{
                ...state,
                list:deleteTodo(state.list, action.payload)
            }
        case UserActionTypes.COMPLETE_TODO:
            return{
                ...state,
                list:completetodo(state.list, action.payload)
            }
        
        case UserActionTypes.ACTION_CLEAR_TODO:
            return{
                ...state,
                currentItem:''
            }
        default:
            return state;
    }
};

export default TodoReducer;