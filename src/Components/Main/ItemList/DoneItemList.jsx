import './itemList.css';

const DoneItemList = () => {
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
            </div>
        </section>
    );
}
 
export default DoneItemList;