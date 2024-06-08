import Done from '../TitlesOfActivity/Done';
import ToDo from '../TitlesOfActivity/ToDo';
import Trash from '../TitlesOfActivity/Trash';
import './pager.css';
import './inputTask.css'
import { useState, useEffect } from 'react';

const Pager = () => {
    const [activeTab, setActiveTab] = useState ("TODO");
    const [isMenuVisible, setMenuVisible] = useState (false);
    const [toDoText, setToDoText] = useState ('');
    
    const renderContent = () => {
        switch (activeTab) {
            case 'TODO':
                return <ToDo />;
            case 'DONE':
                return <Done />;
            case 'TRASH':
                return <Trash />;
            default:
                return null;
        }
    };

    function handleTextChnge(e) {
        setToDoText(e.target.value)
    }

    function add() {
        localStorage.setItem('inputTextArea', toDoText)
    }

    // useEffect(() => {
    //     const textFromStorage = localStorage.getItem('inputTextArea')
    //     setToDoText(textFromStorage)
    // })

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
                        <textarea type="text" className='tasks' placeholder="Your text" value={toDoText} onChange={handleTextChnge}/>
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