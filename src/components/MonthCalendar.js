import React, { useState } from 'react';
import { startOfMonth, addMonths, subMonths, getMonth, format, parse } from 'date-fns';
import { weeksOnMonth } from './../util/date';
import Week from './Week';
import TODOS from '../todos';

export default (props) => {
    const [date, setDate] = useState(startOfMonth(props.date));
    const [todos, setTodos] = useState([]); 
    let [todoId, setTodoId] = useState(1);
    
    const month = getMonth(date);
    let weeks = weeksOnMonth(date);

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    }

    const addNewTodo = todo => {
        setTodos(todos.concat([{
            id: todoId,
            ...todo
        }]));

        setTodoId(todoId + 1);
    }

    const weeksDays = weeks.map((week, index) => {
        return (
            <Week week={week} 
                month={month} 
                todos={todos} 
                deleteTodo={deleteTodo} 
                key={index} 
                addNewTodo={addNewTodo}
            />
        );
    });

    return (
        <div className="month-calendar">
            <div className="header">
                <div>
                    <button className="button button-grey button-200" onClick={() => setDate(subMonths(date, 1))}>Previous</button>
                </div>
                <div className="title">
                    { format(date, 'MMMM, YYYY', { locale: 'es'}) }
                </div>
                <div>
                    <button className="button button-grey button-200" onClick={() => setDate(addMonths(date, 1))}>Next</button>
                </div>
            </div>
            <div>
                {weeksDays}
            </div>
        </div>
    );
}
