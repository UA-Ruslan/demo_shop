import React from "react";
import styles from "./cart.module.scss"

const Cart = ({cart, setCart}) => {
    const totalPrice = cart.reduce((total, el) => total + el.price, 0);
    const handleClick = () => {
        window.localStorage.clear();
        setCart([])
    }
    return (
        <div className={styles.cartWrapper}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h1>TOTAL: {totalPrice} $</h1>

                <button className={styles.cleanBtn} disabled={cart.length === 0} onClick={handleClick}>CLEAN CART
                </button>

            </div>
            <div className={styles.contentWrapper}>

                {cart.map((el, index) => {
                    return (
                        <div className={styles.productItem} key={index}>
                            <div className={styles.imageWrapper}>
                                <img src={el.images[0]} width={100} height={100} alt="img"/>
                            </div>
                            <div>
                                <div>
                                    <p>{el.title}</p>
                                </div>
                                <div>
                                    <p>
                                        {el.price} $
                                    </p>
                                    <p>
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Cart;