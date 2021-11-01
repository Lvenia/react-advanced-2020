import React, {useState} from "react";
import List from "./List"
import DATA from "./data";
import styles from "./style.css";

const App = () => {
    const [listItems, setListItems] = useState(DATA);
    const [hideList, setHideList] = useState(true);

    const handleClick = () => {
        if(listItems.length > 0) {
            setListItems([]);
        } else {
            setListItems(DATA);
        }
        setHideList(prevState => !prevState);
    }

    return (
        //react fragment exported to section with the className container
        <>
            <h3>{`${listItems.length > 0 ? listItems.length : "No"} birthdays today`}</h3>
            <List people={listItems}/>
            <button
                type="button"
                onClick={handleClick}
            >
                {hideList ? "Hide List" : "Show List"}
            </button>
        </>
    )
};

export default App;