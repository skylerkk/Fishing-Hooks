import React from 'react'
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function Navbar(props) {
    return (
        <Nav
            className='bg-dark'
        >
            <NavbarBrand
                className={'text-light'}
            >
                Fishing Hooks
            </NavbarBrand>
            {props.pages.map((items, index) => {
                return (
                    <NavItem
                        key={index}
                    >
                        <NavLink
                            className={'text-light' + (props.currentPage === index ? 'active' : '')}
                            onClick={() => props.setPage(index)}
                        >
                            {items.name}
                            {/* {items.name === 'Cart' ? props.cart : ''} */}
                        </NavLink>
                    </NavItem>
                )
            })}
        </Nav>
    );
}
export default Navbar;