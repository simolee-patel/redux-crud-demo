import React from 'react'
import { connect } from 'react-redux'
import {setCurrentTodo} from '../../redux/todo/todo.actions';

const FormInputComponent = ({currentItem,setCurrentTodo}) => {
    return (
        <>
       
        <div className="header">
        <input className="todo__input" value={currentItem} onChange={(event)=>setCurrentTodo(event.target.value)}></input>
        <button className="todo__input-button" type="submit" value="submit">submit</button>
        </div>
        </>

    )
}


const mapStateToProps = (state) => ({
    currentItem:state.todo.currentItem
})

const mapDispatchToProps =dispatch=>({
    setCurrentTodo:(item)=>dispatch(setCurrentTodo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormInputComponent)
