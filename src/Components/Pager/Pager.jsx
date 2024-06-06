import './pager.css';

const Pager = () => {
    return (
        <section className="pager">
            <div className="container">
                <div className="pagerLine">
                    <button className="btn">
                        <span>To Do</span>
                    </button>
                    <button className="btn">
                        <span>Done</span>
                    </button>
                    <button className="btn">
                        <span>Trash</span>
                    </button>
                </div>

                <div className="addToDos">
                    <button className='plus'></button>
                </div>
            </div>
        </section>
    );
}
 
export default Pager;