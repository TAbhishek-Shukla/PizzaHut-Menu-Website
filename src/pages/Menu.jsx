import React from 'react'
import "../styles/Menu.css"
import MenuItem from '../components/MenuItem';
import { MenuList } from '../Helpers/MenuList'
const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Pizzahut Menu</h1>
        <div className='menuList'> 
        {MenuList.map((item,key) => {
          return (
            <MenuItem
            key={key}
                name={item.name}
                image={item.image}
                price={item.price}
                  />
            )
          })}</div>
    </div>
  )
}

export default Menu