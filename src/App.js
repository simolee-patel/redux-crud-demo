import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { setCurrentTodo } from './redux/todo/todo.actions';
import  FormInputComponent  from './component/form-input/form-input.component';

function App({currentItem,setCurrentTodo}) {
  return (
    <div className="App">
      <form>
        <FormInputComponent/>
      </form>
    </div>
  );
}



export default App;
