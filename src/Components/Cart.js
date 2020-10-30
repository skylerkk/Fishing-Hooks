import React from 'react'
import { Button } from 'reactstrap';

function Cart(props) {
    let total = 0;
    props.cart.map((item) => {
        total += item.price * item.count;
    })
    return (
        <div className='row'>
            <ul className='list-group col-12 py-5'>
                {props.cart.map((item, index) => {
                    return (
                        <li className='list-group-item' style={{ display: 'inline-block' }} key={index}>
                            <p className='float-left pr-5'>{item.name}</p>
                            <Button
                                className='mr-2'
                                onClick={() => props.changeCart(item.name, -1, item.price)}
                            >-1</Button>
                            {item.count}
                            <Button
                                className='ml-2'
                                onClick={() => props.changeCart(item.name, 1, item.price)}
                            >+1</Button>
                            <p className='float-right'>${item.total}</p>
                        </li>
                    )
                })}
            </ul>
            <h4>Pre-Shipping Total: ${total}</h4>
        </div>
    );
}
export default Cart;