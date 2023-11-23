import React, { Children } from 'react';
import styles from './TaskList.module.css';
import { TaskItem } from '../Index';

const TaskList = ( { tasks, onComplete }) => {
    return(
        <div className={styles.taskList}>
            {tasks.map(task => <TaskItem key={task.id} task={task} onComplete={onComplete}/>)}
        </div>
    )
}

export { TaskList }