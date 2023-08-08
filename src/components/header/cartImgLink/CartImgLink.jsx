import {NavLink} from "react-router-dom";
import styles from "./cartImgLink.module.scss";
import cartWhite from "../../../images/cart.png";
import cartBlack from "../../../images/cartDark.png";
import React from "react";

const CartImgLink = ({cart, themeToggle}) => {
    return (
        <NavLink className={styles.cartWrapper} to='/cart'>
            <img src={!themeToggle ? cartWhite : cartBlack} height={50} alt="Cart img"/>
            <div className={cart.length !==0 ? styles.cartCountActive : styles.cartCountUnActive}>{cart.length}</div>
        </NavLink>
    )
}

export default CartImgLink;