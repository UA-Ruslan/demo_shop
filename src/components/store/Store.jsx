import React, {useEffect, useState} from "react";
import styles from "./store.module.scss"
import axios from "axios";
import AddBtn from "./addBtn/AddBtn";

const Store = ({setCart, cart}) => {

    const [data, setData] = useState([])
    const [addedItemsId, setAddedItemsId] = useState([])

    useEffect(() => {
        const itemIdLocalStorage = window.localStorage.getItem("added_item_id");
        if (itemIdLocalStorage) {
            setAddedItemsId(JSON.parse(itemIdLocalStorage));
        }
    }, []);

    useEffect(() => {
        if (cart.length !== 0) {
            window.localStorage.setItem("added_item_id", JSON.stringify(cart.map(el=>el.id)))
        }
    }, [cart])



    useEffect(() => {
        axios.get('https://dummyjson.com/products?&limit=100')
            .then(res => {
                setData(res.data.products)
            })

    }, [])


    const isItemAdded = (itemId) => addedItemsId.includes(itemId);


    return (
        <div className={styles.storeWrapper}>
            <h1>STORE</h1>
            <div className={styles.contentWrapper}>

                {data.map((el, index) => {
                    return (
                        <div className={styles.productItem} key={index}>
                            <div className={styles.imageWrapper}>
                                <img src={el.images[0]} width={100} height={100} alt="img" />
                            </div>
                            <div>
                                <div>
                                    <p>{el.title}</p>
                                </div>
                                <div>
                                    <p>
                                        {el.price} $
                                    </p>
                                </div>
                            </div>

                            <AddBtn isItemAdded={isItemAdded}  el={el} setCart={setCart}/>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Store;