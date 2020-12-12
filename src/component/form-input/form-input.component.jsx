import React from 'react'
import { connect } from 'react-redux'
import {setCurrentTodo} from '../../redux/todo/todo.actions';

const FormInputComponent = ({currentItem,setCurrentTodo}) => {
    return (
        <input value={currentItem} onChange={(event)=>setCurrentTodo(event.target.value)}></input>
    )
}


const mapStateToProps = (state) => ({
    currentItem:state.todo.currentItem
})

const mapDispatchToProps =dispatch=>({
    setCurrentTodo:(item)=>dispatch(setCurrentTodo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormInputComponent)
