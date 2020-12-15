import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleChecked} from '../../redux/todo/todo.actions';
import {deleteTodo,completeTodo} from '../../redux/todo/todo.actions'

export const TodoListComponent = ({currentList,setChecked, setDeleted, setStatus}) => {
    // const [editHook,setEditHook]=useState(0);
    return (
        <div className="list">
                    <ul className="list-main">
                        {currentList.length === 0 ? <div>No any Todoes</div> : currentList.map((item, index) => {
                            return <li className="list-item">
                                {console.log(item)}
                                <input className="checkbox" type="checkbox" 
                                 checked={item.isChecked} 
                                onChange={()=>setChecked(item.id)}></input>
                                
                                <p className={item.isChecked?'checked':'uncheck'}>{item.value}</p>
                                <div className="icon-button">
                                    <button className="list-item-deleteButton" disabled={item.isChecked} onClick={() =>setDeleted(item.id)}>❌</button>
                                    <button className="list-item-completeButton" disabled={item.isChecked} onClick={() =>setStatus(item.id)}>
                                        {item.status ? '😉' : '😪'}
                                    </button>
                                </div>
                            </li>
                            
                        })}
                    </ul>
                </div>
    )
}

const mapStateToProps = (state) => ({
    currentList:state.todo.list
})

const mapDispatchToProps =dispatch=> ({
    setChecked:(id)=>dispatch(toggleChecked(id)),
    setDeleted:(id)=>dispatch(deleteTodo(id)),
    setStatus:(id)=>dispatch(completeTodo(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
