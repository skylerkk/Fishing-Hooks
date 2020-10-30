import React from 'react'
import { Button } from 'reactstrap';

function Shipping(props) {
    const shipping = [{name: 'Free Shipping', price: 0}, {name: 'Drone 1 Hour Delivery', price: 400}];
    return (
        <div className='row'>
        <ul className='list-group col-12 py-5'>
            {shipping.map((item ,index) => {
                return (
                    <li className={'list-group-item ' + (props.ship === index + 1 ? 'bg-success' : '')}  style={{ display: 'inline-block' }} key = {index}>
                        <p className='float-left pr-5'>{item.name}</p>
                        <p className='float-right'>${item.price}</p>
                        <Button
                         onClick = {() => props.changeShipping(index+1)}
                         >Select</Button>
                    </li>
                )
            })}
        </ul>
    </div>
    );
}
export default Shipping;