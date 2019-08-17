import React, { useState } from 'react';
import { startOfMonth, addMonths, subMonths } from 'date-fns';
import { weeksOnMonth } from './../util/date';
import Week from './Week';
import './month-calendar.css';

export default (props) => {
    const [date, setDate] = useState(startOfMonth(props.date));
    let weeks = weeksOnMonth(date);

    const weeksDays = weeks.map((week, index) => <Week week={week} key={index} />);

    return (
        <div class="month-calendar">
            <div className="header">
                <div>
                    <button onClick={() => setDate(subMonths(date, 1))}>Previous</button>
                </div>
                <div>
                    Calendar
                </div>
                <div>
                    <button onClick={() => setDate(addMonths(date, 1))}>Next</button>
                </div>
            </div>
            <div>
                {weeksDays}
            </div>
        </div>
    );
}
