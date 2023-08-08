import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Store from "./components/store/Store"
import Cart from "./components/cart/Cart";
import {useToggle} from "./hooks/useToggle";
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import useScreenOrientation from 'react-hook-screen-orientation'



function App() {
    const [themeToggle, setThemeToggle] = useToggle(false);
    const [cart, setCart] = useState([]);
    const screenOrientation = useScreenOrientation()





    useEffect(() => {
        const cartLocalStorage = window.localStorage.getItem("cart_shop");
        if (cartLocalStorage) {
            setCart(JSON.parse(cartLocalStorage));
        }
    }, []);

    useEffect(() => {
        if (cart.length !== 0) {
            window.localStorage.setItem("cart_shop", JSON.stringify(cart))
        }
    }, [cart])

    return (
        <div  className={!themeToggle ? `appWrapper  blackTheme` : `appWrapper  whiteTheme`}>
            <Container fluid className={'m-0 p-0 d-flex flex-column justify-content-between'}>
                <Row>
                    <Col>
                        <Header
                            screenOrientation={screenOrientation}
                            cart={cart}
                            themeToggle={themeToggle}
                            setThemeToggle={setThemeToggle}
                        />
                    </Col>
                </Row>
                <Row className={'flex-grow-1 overflow-hidden'}>
                    <Col className={!themeToggle ? `contentWrapperBlack` : `contentWrapperWhite`}>
                        <div className={!themeToggle ? `contentWrapperBlack` : `contentWrapperWhite`}>
                            <Routes>
                                <Route path='/' element={<Store cart={cart} setCart={setCart}/>}/>
                                <Route path='/cart' element={<Cart setCart={setCart} cart={cart}/>}/>
                            </Routes>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default App;
