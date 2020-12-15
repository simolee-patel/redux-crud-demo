import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { setCurrentTodo,inputClear } from './redux/todo/todo.actions';
import  FormInputComponent  from './component/form-input/form-input.component';
import TodoListComponent from './component/todo-list/todo-list.component';
import {submitCurrentTodo} from './redux/todo/todo.actions';
function App({currentItem,currentList,inputClear}) {
  const addTodo=(event)=>{
    event.preventDefault();
        console.log("button clicked");
        if (currentItem === '') {
            return;
        }
        else {
            const userInput = {
                id: Math.random(),
                value: currentItem,
                status: false,
                isChecked: false,

            };
            console.log("list added");

            // this.setState({
            //     list: list,
            //     value: ""
            // });
            currentList(userInput);
            console.log("push Operation");
            inputClear();
          }
    
  };
  return (
    <div className="App">
 
        <div className="container">
        <div className="header">
          <form onSubmit={addTodo}>
            <FormInputComponent/>
          </form>
          </div>
            <TodoListComponent/>
        </div>
    </div>
  );
  
}

const mapStateToProps=(state)=>({
  currentItem:state.todo.currentItem
});

const mapDispatchToProps=dispatch=>({
  currentList:(item)=>dispatch(submitCurrentTodo(item)),
  inputClear:()=>dispatch(inputClear())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
