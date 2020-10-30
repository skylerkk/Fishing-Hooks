import React from 'react'
import { Button } from 'reactstrap';
function Items(props) {
    return (
        <div className='row'>
            <ul className='list-group col-12 py-5'>
                {props.item.map((item, index) => {
                    return (
                        <li className='list-group-item' style={{ display: 'inline-block' }} key={index}>
                            <p className='float-left pr-5'>{item.name}</p>
                            <Button
                                onClick={() => props.changeCart(item.name, 1, item.price)}
                            >Add to Cart</Button>
                            <p className='float-right'>${item.price}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Items;