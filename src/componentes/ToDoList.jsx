import React from "react";


const ToDoList = () => {
    const [todoArray, setTodoArray] = useState(
        [{
         titulo: "Milk",
         descripcion: "algo",
         isComplete: false,
         id:1
        },
        {
            titulo: "Butter",
            descripcion: "algo",
            isComplete: true,
            id:2
           },
        {
            titulo: "Limon",
            descripcion: "algo",
            isComplete: false,
            id:3
           },
        {
            titulo: "Banana",
            descripcion: "algo",
            isComplete: false,
            id:4
           },
        {
            titulo: "Potato",
            descripcion: "algo",
            isComplete: false,
            id:5
           },
        {
            titulo: "Carrot",
            descripcion: "algo",
            isComplete: false,
            id:6
           }
    
        ])
    const [tareaData, setTareaData] = useState({titulo:'', descripcion:''})
    const handleChange = ({target}) =>{
        setTareaData({...tareaData, [target.name]:target.value})
    }
    const addTarea = (e) =>{
        e.preventDefault();
        if(tareaData.titulo != '' && tareaData.descripcion != ''){
            const todo = tareaData;
            todo.isComplete = false;
            todo.id = todoArray.length + 1;

            setTodoArray([...todoArray, todo])
            setTareaData({titulo:'', descripcion:''})
        }
    }


    return (
      <div>
        <form onSubmit={addTarea}>
            <input type="text" name="titulo" placeholder="Name" value={tareaData.titulo} onChange={handleChange}/>
            <div className="input-group">
            <input type="text" name="descripcion" placeholder="Tag" value={tareaData.descripcion} onChange={handleChange}/>
            <input type="submit" value="+" /></div>
            <button type="sumbit">Save</button>
        </form>
      </div>
    )
}

export default  ToDoList