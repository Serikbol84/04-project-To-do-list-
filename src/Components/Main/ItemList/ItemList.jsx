import './itemList.css'

const ItemList = () => {
    return (
        <section className="itemList">
            <div className="container">
                <div className="actions">
                    <div className="dots">
                        <span className='dot'></span>
                        <span className='dot'></span>
                        <span className='dot'></span>
                    </div>
                    <input type="checkbox" className="checkbox"/>
                    
                </div>
                
            </div>
        </section>
    );
}
 
export default ItemList;