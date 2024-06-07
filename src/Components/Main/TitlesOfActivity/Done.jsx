import './titles.css';
import DoneItemList from '../ItemList/DoneItemList';

const Done = () => {
    return (
        <section className="done"> 
            <div className="container">
                <div className="doneTile">
                    <h1>Done</h1>
                </div>
                <div className="divider">
                    <span className='divider'></span>
                </div>
            </div>
            <DoneItemList />
        </section>
    );
}
 
export default Done;