import './pager.css';
import './inputTask.css'
import Trash from '../../../icons/trash.svg'
import Library from '../../../icons/library.svg'
import { useState, useEffect } from 'react';

const Pager = () => {
    const [activeTab, setActiveTab] = useState ("TODO");
    const [isMenuVisible, setMenuVisible] = useState (false);
    const [toDoText, setToDoText] = useState ('');
    
    useEffect(() => {
        const textFromStorage = localStorage.getItem('inputTextArea')
        if (textFromStorage) {
            setToDoText(textFromStorage)
        } 
    }, [])

    const renderContent = () => {
        switch (activeTab) {
            case 'TODO':
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
                                        <input type="text" className='inputRead'/>
                                    </div>
                                </div>
                                
                                <div className="moveToTrash">
                                    <img src={Trash} alt="" />
                                    <p>Move to Trash</p>
                                </div>
                            </div>
                        </section>
                    </section>
                )
            case 'DONE':
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
                    </section>
                )
            case 'TRASH':
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
                    </section>
                )
            default:
                return null;
        }
    };

    function handleTextChange(e) {
        setToDoText(e.target.value)
    }

    function add() {
        localStorage.setItem('inputTextArea', toDoText)
    }


    return (
        <section className="pager">
            <div className="container">
                <div className="pagerLine">

                    <button className="btn"
                        style={{backgroundColor: activeTab === "TODO" && "rgba(8, 30, 52, 0.42)",
                                color: activeTab === "TODO" && "white"}}
                                onClick={() => setActiveTab ("TODO")}>
                        <span>To Do</span>
                    </button>

                    <button className="btn" 
                        style={{backgroundColor: activeTab === "DONE" && "rgba(8, 30, 52, 0.42)",
                                color: activeTab === "DONE" && "white"}}
                                onClick={() => setActiveTab ("DONE")}>
                        <span>Done</span>
                    </button>

                    <button className="btn" 
                        style={{backgroundColor: activeTab === "TRASH" && "rgba(8, 30, 52, 0.42)",
                                color: activeTab === "TRASH" && "white"}}
                                onClick={() => setActiveTab ("TRASH")}>
                            <span>Trash</span>
                    </button>

                </div>

                <div className="addToDos">
                    <button className='plus' onClick={() => setMenuVisible (!isMenuVisible)}></button>
                </div>

                {isMenuVisible && (
                <div className="inputTask">
                    <div className="inputTaskWrapper">
                        <h1>Add New To Do</h1>
                        <textarea type="text" className='tasks' placeholder="Your text" value={toDoText} onChange={handleTextChange}/>
                        <button className="add" onClick={add}>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
                )}

                <div>
                {renderContent()}
                </div>

            </div>
        </section>
    );
}
 
export default Pager;