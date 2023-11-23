import React from 'react';

const TaskForm = ({ onAddTask }) => {

    const [task, setTask] = React.useState("");
    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(task, tag);

        setTask("");
        setTag("");
    }

    function onChangeTask(event) {
        setTask(event.target.value);
    }
    const [tag, setTag] = React.useState("");

    function onChangeTag(event) {
        setTag(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='Name' type="text" value={task} onChange={onChangeTask} />

            <input placeholder='New tag' type="text" value={tag} onChange={onChangeTag} />
            <button>+</button>

            <button>Save</button>
        </form>
    )
}

export { TaskForm }