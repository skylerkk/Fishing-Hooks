import React from 'react'

function Shipping(props) {

    const shipping = [{name: 'Free Shipping', price: 0}, {name: 'Drone 1 Hour Delivery', price: 400}];


    return (
        <div className='row'>
        <ul className='list-group col-12 py-5'>
            {shipping.map((item ,index) => {
                return (
                    <li className='list-group-item' style={{ display: 'inline-block' }} key = {index}>
                        <p className='float-left'>{item.name}</p>
                        <p className='float-right'>${item.price}</p>
                        <button className='mx-auto'>Select</button>
                    </li>
                )
            })}
        </ul>
    </div>
    );
}

export default Shipping;
