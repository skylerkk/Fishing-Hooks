import React from 'react'

function Accessories(props) {

    const accessories = [{ name: 'crab leg bait', price: 3, type: ['white', 'red'] }, { name: 'worms', price: 5 }, { name: 'can of chopped tuna', price: 2 }]

    return (
        <div className='row'>
            <ul className='list-group col-12 py-5'>
                {accessories.map((item, index) => {
                    return (
                        <li className='list-group-item' style={{ display: 'inline-block' }} key={index}>
                            <p className='float-left'>{item.name}</p>
                            <button>-</button>
                            <button>+</button>
                            <p className='float-right'>${item.price}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Accessories;
