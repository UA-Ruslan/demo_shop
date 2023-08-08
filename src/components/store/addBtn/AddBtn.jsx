import styles from "./addBtn.module.scss";
import React, {useEffect, useState} from "react";

const AddBtn = ({setCart, el, isItemAdded}) => {

    const [addedItem, setAddedItem] = useState(false)
    useEffect(()=> {
        if (isItemAdded(el.id)) {
            setAddedItem(true)
        }
    },[isItemAdded(el.id)])

    const handleAddCartClick = (el) => {
        setCart(prev => [...prev, el])
        setAddedItem(true)
    }

    const  isAdded = isItemAdded(el.id) || addedItem
    return (
        <button disabled={addedItem} onClick={() => handleAddCartClick(el)} className={styles.btnStyle}><b>{isAdded ?'ADDED' : 'ADD TO CART'}</b></button>

    )
}

export default AddBtn;