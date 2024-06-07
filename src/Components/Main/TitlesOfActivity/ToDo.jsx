import './titles.css'
import ToDoItemList from '../ItemList/ToDoItemList'

const ToDo = () => {
    return (
        <section className="toDo"> 
            <div className="container">
                <div className="toDoTile">
                    <h1>To Do</h1>
                </div>
                <div className="divider">
                    <span className='divider'></span>
                </div>
            </div>
            <ToDoItemList />
        </section>
    );
}
 
export default ToDo;