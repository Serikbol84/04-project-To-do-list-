

import './pager.css';
import './inputTask.css'
import Trash from '../../../icons/trash.svg'
import Library from '../../../icons/library.svg'
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Pager = () => {
    const [activeTab, setActiveTab] = useState ("TODO");
    const [isMenuVisible, setMenuVisible] = useState (false);
    const [toDoText, setToDoText] = useState ('');
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
    

    console.log(items);

    const filterToDos = items.filter(item => item.toDoDone === true);
    const filterDones = items.filter(item => item.toDoDone === true && item.checked === true);
    const filterTrashes = items.filter(item => item.onlyTrash === true);
    
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

                        {
                            filterToDos.length ? (
                                filterToDos.map(filterToDo => {
                                    return (
                                        <section className="itemList" key={filterToDo.id}>
                                            <div className="container">
                                                <div className="actions">
                                                    <div className="dots">
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                    </div>

                                                    <input 
                                                        type="checkbox" 
                                                        checked={filterToDo.checked} 
                                                        className="checkbox" 
                                                        onChange={ () => handleCheck(filterToDo.id) }
                                                    />

                                                    <input 
                                                        type="text" 
                                                        value={filterToDo.item} 
                                                        className={`inputRead ${filterToDo.checked && 'textThrought'}`} 
                                                    />

                                                </div>  
                                            </div>
                                        </section>
                                    )
                                })
                            ) : 
                            (
                                <p style={{ fontSize: "18px", color: "Gray" }}>
                                Your list is empty!</p>
                            )
                        }
                        
                        <button className="moveToTrash" onClick={moveToTrash}>
                            <img src={Trash} alt="" />
                            <p>Move to Trash</p>
                        </button>
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

                        {
                            filterDones.map(filterDone => {
                                return (
                                    <section className="itemList" key={filterDone.id}>
                                        <div className="container">
                                            <div className="wrapper">
                                                <div className="actions">
                                                    <div className="dots">
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                    </div>

                                                    <input 
                                                        type="checkbox" 
                                                        className="checkbox" 
                                                        checked={filterDone.checked} 
                                                        onChange={ () => handleCheck(filterDone.id) }
                                                    />

                                                    <input 
                                                        type="text" 
                                                        value={filterDone.item} 
                                                        className={`inputRead ${filterDone.checked && 'textThrought'}`} 
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                        }

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

                        {
                            filterTrashes.map(filterTrash => {
                                return (
                                    <section className="itemList" key={filterTrash.id}>
                                        <div className="container">
                                            <div className="wrapper">
                                                <div className="actions">
                                                    <div className="dots">
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                        <span className='dot'></span>
                                                    </div>

                                                    <input 
                                                        type="checkbox" 
                                                        className="checkbox" 
                                                        checked={filterTrash.checked} 
                                                        onChange={ () => handleCheckTrash(filterTrash.id) }
                                                    />

                                                    <input 
                                                        type="text" 
                                                        value={filterTrash.item} 
                                                        className={`inputRead ${filterTrash.checked && 'textThrought'}`} 
                                                    />

                                                </div>
                                            </div>                                
                                        </div>
                                    </section>
                                ) 
                            })
                        }
                        
                        <div className="trashMenu">

                            <button className="delete" onClick={deleteForever}>
                                <img src={Trash} alt="" />
                                <p>Delete Forever</p>
                            </button>

                            <button className="moveBack" onClick={moveBackToToDo}>
                                <img src={Library} alt="" />
                                <p>Move Back To To Do</p>
                            </button>

                        </div>
                    </section>
                )
            default:
                return null;
        }
    };


    function handleTextChange(e) {
        setToDoText(e.target.value)
    }

    const add = () => {
        const newItem = { 
            id: Date.now(), 
            checked: false, 
            item: toDoText, 
            onlyTrash: false, 
            toDoDone: true 
        }

        const updateItems = [...items, newItem];

        setItems(updateItems)
        setToDoText('');
        
        localStorage.setItem('todolist', JSON.stringify(updateItems))
    }

    const handleCheck = (id) => {
        console.log(`key ${ id }`)
        const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
      
        localStorage.setItem('todolist', JSON.stringify(listItems))
    }

    const handleCheckTrash = (id) => {
        
        const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
      
        localStorage.setItem('todolist', JSON.stringify(listItems))
    }

    const moveToTrash = () => {
        const checkedItems = items.filter(item => item.checked);
        const updateItemsOfTrash = items.map(item =>
            checkedItems.find(checkedItem => checkedItem.id === item.id) 
            ? { 
                ...item, 
                onlyTrash: true, 
                toDoDone: false, 
                checked: false 
            } : item
        );

        setItems(updateItemsOfTrash);

        localStorage.setItem('todolist', JSON.stringify(updateItemsOfTrash))
    }

    const moveBackToToDo = () => {
        const checkedItems = items.filter(item => item.checked);
        const updatedItems = items.map(item =>
            checkedItems.find(checkedItem => checkedItem.id === item.id)
            ? {
                ...item, 
                onlyTrash: false, 
                toDoDone: true
            } : item
        )

        setItems(updatedItems);
        localStorage.setItem('todolist', JSON.stringify(updatedItems))
    }

    const deleteForever = () => {
        const checkedItems = items.filter(item => !(item.checked && item.onlyTrash));

        setItems(checkedItems)

        localStorage.setItem('todolist', JSON.stringify(checkedItems))
    }

    const handleClose = () => {
        setMenuVisible(false);
    };

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
                    <ClickAwayListener onClickAway={handleClose}>
                        <div className="inputTask">
                            <div className="inputTaskWrapper">
                                <h1>Add New To Do</h1>
                                <textarea 
                                    type="text" 
                                    className='tasks' 
                                    placeholder="Your text" 
                                    value={toDoText} onChange={handleTextChange}
                                />

                                <button 
                                    className="add" 
                                    onClick={add}
                                >
                                    <span>Add</span>
                                </button>

                            </div>
                        </div>
                    </ClickAwayListener>
                )}

                <div>
                {renderContent()}
                </div>

            </div>
        </section>
    );
}
 
export default Pager;