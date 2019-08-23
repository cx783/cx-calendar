import React, { useState } from 'react';
import { startOfMonth, addMonths, subMonths, getMonth, format, parse } from 'date-fns';
import { weeksOnMonth } from './../util/date';
import Week from './Week';
import TODOS from '../todos';
import './month-calendar.css';

export default (props) => {
    const [date, setDate] = useState(startOfMonth(props.date));
    const month = getMonth(date);
    let weeks = weeksOnMonth(date);
    const todos = TODOS.map(t => {
        return {
            ...t,
            date: parse(t.date)
        };
    });

    const weeksDays = weeks.map((week, index) => <Week week={week} month={month} todos={todos} key={index} />);

    return (
        <div class="month-calendar">
            <div className="header">
                <div>
                    <button className="button" onClick={() => setDate(subMonths(date, 1))}>Previous</button>
                </div>
                <div className="title">
                    { format(date, 'MMMM, YYYY', { locale: 'es'}) }
                </div>
                <div>
                    <button className="button" onClick={() => setDate(addMonths(date, 1))}>Next</button>
                </div>
            </div>
            <div>
                {weeksDays}
            </div>
        </div>
    );
}
