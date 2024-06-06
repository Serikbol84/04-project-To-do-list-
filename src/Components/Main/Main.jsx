import ItemList from './ItemList/ItemList';
import Pager from './Pager/Pager';
import ToDos from './ToDos/ToDo';
import './main.css';

const Main = () => {
    return (
        <div className="Main">
            <Pager />
            <ToDos />
            <ItemList />
        </div>
        
    );
}
 
export default Main;