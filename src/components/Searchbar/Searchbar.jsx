import React from 'react'
import "./Searchbar.scss"

const Searchbar = (props) => {
  const { handleSearch } = props;

  return (
    <div className='search'>
      <div className='search__container'>
        <label htmlFor="search">Find your next course!...</label>
        <input className='search__container__input' type="text" placeholder='Search...' onChange={handleSearch}/>
        <div className='search__icon'></div>
      </div>
    </div>
  )
}

export default Searchbar