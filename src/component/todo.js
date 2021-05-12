/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{useState} from 'react'
import logo from "../logo.svg";
import "../App.css";
import ThemeToggler from './themeToggler';
import { ThemeContext } from './context';

const Todo = () => {
    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState([]);

    const [theme, setTheme] = useState('light');

    const addItem = () => {
        if(!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('')
        }
    }
        //Delete Items Function

        const deleteItem = (id) => {
            console.log(id);
            const updateditems = items.filter((element,index) => {
                return index !== id;
            });

            setItems(updateditems)
        }
        
        //Remove All
        const removeAll = () => {
            setItems([]);
        }
        
    return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        <div className="main-div" data-theme={theme}>
                   <div className="App" data-theme={theme}>
                       <ThemeToggler/>
            <div class="child-div">
                <figure>
                    <img src={logo} alt="todo"></img>
                    <b><figcaption> 🌎 Add your List Here ☮</figcaption></b>
                </figure>

                <div className="addItems">
                    <input typr="text" placeholder=" ✍️ Add Todo Items here" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                    <i className="fa fa-plus add-btn" title="add item" onClick={addItem}></i>
                </div>

                <div className="showItems">

                    {
                        items.map((element, index) => {
                            return (
                                <div className="eachItem" key={index}>
                                    <h3>{element}</h3>
                                    <i className="fa fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(index)}></i>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECKLIST</span></button>
                </div>
            </div>
            </div>
        </div>
        </ThemeContext.Provider>
    )
}

export default Todo;
