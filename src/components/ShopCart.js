import React, { useContext } from 'react';
import {Link} from "react-router-dom"
//component
import Cart from './shared/Cart';
// style 
import styles from "../styles/ShopCart.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
// actions 
import { clear, checkout } from '../redux/cart/cartAction';

const ShopCart = () => {

    let state = useSelector(state => state.cartState)
    let dispatch = useDispatch();

    return (
        <div className={styles.mainContainer}>
            <section className={styles.cartContainer}>
                {state.selectedItems.map((item) => (
                    <Cart key={item.id} data={item} />
                ))}
            </section>
            <section>
                {/* payment */}
                {
                    (state.itemsCounter > 0) && <div className={styles.payment}>
                        <p>Total Items: <span>{state.itemsCounter}</span></p>
                        <p>Total Payment: <span>{state.total}</span></p>
                        <div>
                            <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                            <button onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                        </div>
                    </div>
                }

                {
                    (state.itemsCounter === 0 && !state.checkout) && <div className={styles.messageBox}>
                        <p>Want to buy ?</p>
                        <Link to="/products">Go to shop</Link>
                    </div>
                }

                {
                    (state.checkout) && <div className={styles.messageBox}>
                        <p>Check out successfully</p>
                        <Link to={"/products"} >Buy More</Link>
                    </div>
                }
            </section>
        </div>
    );
};


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapReducerToProps = (dispatch) => {
    return{
        clear: dispatch(clear()),
        checkout: dispatch(checkout())

    }
}



// export default connect(mapStateToProps, mapReducerToProps)(ShopCart);
export default ShopCart;
