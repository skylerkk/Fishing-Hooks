import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Items from './Components/Items'
import Accessories from './Components/Accessories'
import Shipping from './Components/Shipping'
import Submit from './Components/Submit'

function App() {

  const pages = [{ name: 'Items' }, { name: 'Accessories' }, { name: 'Shipping' }, { name: 'Submit' }]

  const [currentPage, setCurrentPage] = useState(0);

  const setPage = async(newPageNum) => {
    await setCurrentPage(newPageNum)
    console.log({currentPage, newPageNum})
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum));
  }

  useEffect(() => {
    let LSpage = window.localStorage.getItem('currentPage')
    if (LSpage !== currentPage) {
      setCurrentPage(JSON.parse(LSpage))
    }
    console.log('in use effect')
  }, [currentPage])


  return (
    <div className='container'>
      {currentPage}
      <Navbar
        setPage={setPage}
        pages={pages}
        currentPage={currentPage}
      />
      {currentPage === 0 ? <Items /> : ''}
      {currentPage === 1 ? <Accessories /> : ''}
      {currentPage === 2 ? <Shipping /> : ''}
      {currentPage === 3 ? <Submit /> : ''}

    </div>
  );
}

export default App;
