import './pager.css';
import './inputTask.css'
import Trash from '../../../icons/trash.svg'
import Library from '../../../icons/library.svg'
import { useState, useEffect } from 'react';

const Pager = () => {
    const [activeTab, setActiveTab] = useState ("TODO");
    const [isMenuVisible, setIsMenuVisible] = useState (false);
    const [toDoText, setToDoText] = useState('')
    const [toDos, setToDos] = useState ([
        {   
            id: 123,
            name:'TODO',
            title: "To do",
            isTrash: true,
            moveBack: false,
            children: [
            {
                id: 1,
                checked: false,
                item: 'Write Essay'
            },
            {
                id: 2,
                checked: false,
                item: 'One Hour CSS Course Online',
            },
            {
                id: 3,
                checked: false,
                item: 'Buy One Way Tickets to San Fransico',
            },
            {
                id: 4,
                checked: false,
                item: 'Go to Gym',
            },
            {
                id: 5,
                checked: false,
                item: 'Buy Groceries',
            }
           ] 
        },
        {
            id: 456,
            name:'DONE',
            title: "Done",
            isTrash: false,
            moveBack: false,
            children: [
                {
                    id: 1,
                    checked: false,
                    item: 'Write Essay'
                },
                {
                    id: 2,
                    checked: false,
                    item: 'One Hour CSS Course Online',
                },
                {
                    id: 3,
                    checked: false,
                    item: 'Buy One Way Tickets to San Fransico',
                },
                {
                    id: 4,
                    checked: false,
                    item: 'Go to Gym',
                },
                {
                    id: 5,
                    checked: false,
                    item: 'Buy Groceries',
                }
            ] 
        },
        {
            id: 789,
            name:'TRASH',
            title: "Trash",
            isTrash: false,
            moveBack: true,
            children: [
                {
                    id: 1,
                    checked: false,
                    item: 'Write Essay'
                },
                {
                    id: 2,
                    checked: false,
                    item: 'Write Essay'
                },
                {
                    id: 3,
                    checked: false,
                    item: 'Write Essay'
                }
            ] 
         }
    ]);
    
    
    console.log(activeTab)
    const renderContent = () => {

        return toDos.map(toDo => {
            if (toDo.name === activeTab) {

                return (
                    <section className='trash'>
                        <div className="container">
                            <div className="title">
                                <h1>{toDo.title}</h1>
                            </div>
                            <div className="divider">
                                <span className='divider'></span>
                            </div>
                        </div> 

                        {
                            toDo.children.map(child => {
                                return (
                                    <section className="itemList" key={child.id}>
                                        <div className="container">
                                            <div className="wrapper">
                                                <div className="actions">
                                                    <div className="dots">
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                    </div>
                                                    <input type="checkbox" checked={false} className="checkbox" />
                                                    <input type="text" value={child.item} className='inputRead' />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                        }

                        {
                            (toDo.isTrash === true) && (
                                <div className="trashMenu">
                                    <button className="delete">
                                        <img src={Trash} alt="" />
                                        <p>Move to trash</p>
                                    </button>
                                </div>
                            )
                        }

                        {
                            (toDo.moveBack === true) && (
                                <div className='trashMenu'>
                                    <button className="delete">
                                    <img src={Trash} alt="" />
                                    <p>Delete Forever</p>
                                    </button>
                                    <button className="moveBack">
                                        <img src={Library} alt="" />
                                        <p>Move Back To To Do</p>
                                    </button>
                                </div>
                            )
                        }

                    </section>
                )

            }
           
        })

    };

    // useEffect(() => {
    //     const textFromStorage = localStorage.getItem('inputTextArea')
    //     if (textFromStorage) {
    //         setToDoText(textFromStorage)
    //     } 
    // }, [])

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
                    {
                        toDos.map(toDo  => {
                            return (
                                <button 
                                    className="btn"
                                    style={{backgroundColor: activeTab === toDo.name && "rgba(8, 30, 52, 0.42)",
                                    color: activeTab === toDo.name && "white"}}
                                    onClick={() => setActiveTab (toDo.name)}
                                >
                                    <span>{toDo.name}</span>
                                </button>
                            )
                        })

                    }


                </div>

                <div className="addToDos">
                    <button className='plus' onClick={() => setIsMenuVisible (!isMenuVisible)}></button>
                </div>

                {isMenuVisible && (
                <div className="inputTask">
                    <div className="inputTaskWrapper">
                        <h1>Add New To Do</h1>
                        <textarea type="text" className='tasks' placeholder="Your text" value={toDoText} />
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