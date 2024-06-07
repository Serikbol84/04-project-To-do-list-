import './itemList.css';
import Trash from '../../../icons/trash.svg'
import Library from '../../../icons/library.svg'

const TrashItemList = () => {
    return (
        <section className="itemList">
            <div className="container">
                <div className="wrapper">
                    <div className="actions">
                        <div className="dots">
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <input type="checkbox" className="checkbox" />
                        <input type="text" value='' className='inputRead' />
                    </div>
                </div>
                
                <div className="trashMenu">
                    <div className="delete">
                        <img src={Trash} alt="" />
                        <p>Delete Forever</p>
                    </div>
                    <div className="moveBack">
                        <img src={Library} alt="" />
                        <p>Move Back To To Do</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default TrashItemList;