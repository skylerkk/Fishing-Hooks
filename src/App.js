import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Items from './Components/Items'
import Cart from './Components/Cart'
import Shipping from './Components/Shipping'
import Submit from './Components/Submit'

function App() {

  const pages = [{ name: 'Items' }, { name: 'Shipping' }, { name: 'Cart' }, { name: 'Submit' }]
  const items = [{ name: 'big boat', price: 10000 }, { name: 'little boat', price: 4000 }, { name: 'fishing pole', price: 30 }, { name: 'worms', price: 2 }, { name: 'white crab meat', price: 5 }]
  const [currentPage, setCurrentPage] = useState(0);
  const [cart, setCurrentCart] = useState([]);
  const [shipping, setCurrentShipping] = useState(0);
  const [submit, setSubmitForm] = useState()

  const setPage = async (newPageNum) => {
    await setCurrentPage(newPageNum)
    console.log({ currentPage, newPageNum })
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum));
  }
  useEffect(() => {
    let LSpage = window.localStorage.getItem('currentPage')
    if (LSpage !== currentPage) {
      setCurrentPage(JSON.parse(LSpage))
    }
    console.log('in use effect')
  }, [currentPage])

  const changeShipping = (type) => {
    if (type === 1) {
      setCurrentShipping(1)
    }
    else {
      setCurrentShipping(2)
    }
  }

  const changeSubmit = (newSubmit) => {
    setSubmitForm(newSubmit)
  }

  const changeCart = (itemName, itemAmount, itemPrice) => {
    let newCart = cart;
    if (cart.map(item => item.name).indexOf(itemName) === -1 && itemAmount > 0) {
      newCart.push({ name: itemName, count: itemAmount, price: itemPrice, total: 0 })
    }
    else {
      newCart[newCart.map(item => item.name).indexOf(itemName)].count += itemAmount;
      if (newCart[newCart.map(item => item.name).indexOf(itemName)].count > 0) {
        newCart[newCart.map(item => item.name).indexOf(itemName)].total = newCart[newCart.map(item => item.name).indexOf(itemName)].count * newCart[newCart.map(item => item.name).indexOf(itemName)].price;
        console.log(newCart[newCart.map(item => item.name).indexOf(itemName)].total)
      }
      // else{
      //   newCart[newCart.map(item => item.name).indexOf(itemName)].count = 0;
      // }
    }
    // let tempCart = [];
    // newCart.forEach((item) => {
    //   if(item.count > 0){
    //     tempCart.push(item);
    //   }
    // })
    newCart = newCart.filter(item => item.count > 0);
    console.log(newCart);
    setCurrentCart([...newCart]);
  }

  return (
    <div className='container'>
      <Navbar
        setPage={setPage}
        pages={pages}
        currentPage={currentPage}
        cart={cart}
      />
      {currentPage === 0 ? <Items item={items} changeCart={changeCart} /> : ''}
      {currentPage === 1 ? <Shipping ship={shipping} changeShipping={changeShipping} /> : ''}
      {currentPage === 2 ? <Cart cart={cart} changeCart={changeCart} /> : ''}
      {currentPage === 3 ? <Submit changeSubmit={changeSubmit}/> : ''}
    </div>
  );
}
export default App;