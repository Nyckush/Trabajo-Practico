import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ task, onComplete }) => {
    return(
        <div className={styles.taskItem}>
            <button onClick={() => onComplete(task.id)}>CheckBox</button>
            <p className={task.isCompleted ? styles.completed : ''}>{task.task}</p>
            <span>{task.tag}</span>
        </div>
    )
}

export { TaskItem }