import React, { useState } from 'react';
import './Kanban.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaTasks, FaPen, FaCheckCircle } from 'react-icons/fa';

const initialTasks = [
  { id: 'task-1', content: 'Setup project environment', icon: <FaTasks /> },
  { id: 'task-2', content: 'Develop core components', icon: <FaPen /> },
  { id: 'task-3', content: 'Write unit tests', icon: <FaCheckCircle /> },
];

export default function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(tasks);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setTasks(reordered);
  };

  return (
    <div className="kanban-container">
      <h2 className="kanban-title">Kanban Board</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="kanban-board"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`kanban-task ${snapshot.isDragging ? 'dragging' : ''}`}
                      style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging
                          ? '0 8px 16px rgba(0, 123, 255, 0.4)'
                          : '0 4px 8px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      <span className="task-icon">{task.icon}</span>
                      <span className="task-content">{task.content}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
