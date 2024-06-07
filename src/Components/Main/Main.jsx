import ToDoItemList from './ItemList/ToDoItemList';
import Pager from './Pager/Pager';
import ToDo from './ToDo/ToDo';
import './main.css';

const Main = () => {
    return (
        <div className="Main">
            <Pager />
            <ToDo />
            <ToDoItemList />
        </div>
        
    );
}
 
export default Main;