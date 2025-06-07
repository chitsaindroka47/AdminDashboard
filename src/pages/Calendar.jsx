import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState({});
  const [input, setInput] = useState('');
  const [calendarView, setCalendarView] = useState('month');

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    const key = date.toDateString();
    const updated = { ...todos };
    updated[key] = updated[key] ? [...updated[key], input] : [input];
    setTodos(updated);
    setInput('');
  };

  const renderTodos = () => {
    const key = date.toDateString();
    return todos[key]?.map((todo, i) => (
      <li key={i} className="todo-item">{todo}</li>
    )) || <p className="no-todos">No tasks for this day.</p>;
  };

  const handleViewClick = (type) => {
    if (type === 'today') {
      const today = new Date();
      setDate(today);
    }
    setCalendarView(type === 'today' ? 'month' : type);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Smart Calendar</h2>

      <div className="view-buttons">
        <button className={date.toDateString() === new Date().toDateString() ? 'active' : ''} onClick={() => handleViewClick('today')}>Today</button>
        <button className={calendarView === 'week' ? 'active' : ''} onClick={() => handleViewClick('week')}>Week</button>
        <button className={calendarView === 'month' ? 'active' : ''} onClick={() => handleViewClick('month')}>Month</button>
      </div>

      <div className="calendar-box">
        <Calendar
          onChange={setDate}
          value={date}
          view={calendarView}
          onViewChange={({ activeStartDate, view }) => setCalendarView(view)}
        />

        <div className="todo-section">
          <h4>Selected Date: {date.toDateString()}</h4>
          <input
            type="text"
            placeholder="Add task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
          <ul className="todo-list">{renderTodos()}</ul>
        </div>
      </div>
    </div>
  );
}
