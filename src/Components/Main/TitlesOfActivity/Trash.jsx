import TrashItemList from '../ItemList/TrashItemList';
import './titles.css';


const Trash = () => {
    return (
        <section className="trash"> 
            <div className="container">
                <div className="trashTile">
                    <h1>Trash</h1>
                </div>
                <div className="divider">
                    <span className='divider'></span>
                </div>
            </div>
            <TrashItemList />
        </section>
    );
}
 
export default Trash;