import React from 'react';
import ReactDOM from 'react-dom';
import MonthCalendar from './components/MonthCalendar';

const App = () => {
    return <MonthCalendar date={new Date()}/>
}

ReactDOM.render(<App />, document.querySelector('#root'));
