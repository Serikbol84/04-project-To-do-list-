import './itemList.css'
import Trash from '../../../icons/trash.svg'

const ItemList = () => {
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
                    <div className="actions">
                        <div className="dots">
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <input type="checkbox" className="checkbox" />
                        <input type="text" value='' className='inputRead' />
                    </div>
                    <div className="actions">
                        <div className="dots">
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <input type="checkbox" className="checkbox" />
                        <input type="text" value='' className='inputRead' />
                    </div>
                    <div className="actions">
                        <div className="dots">
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <input type="checkbox" className="checkbox" />
                        <input type="text" value='' className='inputRead' />
                    </div>
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
                
                <div className="moveToTrash">
                    <img src={Trash} alt="" />
                    <p>Move to Trash</p>
                </div>
            </div>
        </section>
    );
}
 
export default ItemList;