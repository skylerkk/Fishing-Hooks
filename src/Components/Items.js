import React from 'react'

function Items(props) {

    const items = [{ name: 'fishing pole', price: 70, type: ['silver', 'black', 'blue']}, { name: 'Tiny Boat', price: 1000}, { name: 'Big Boat', price: 2000}];

    return (
        <div className='row'>
            <ul className='list-group col-12 py-5'>
                {items.map((item, index) => {
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

export default Items;
