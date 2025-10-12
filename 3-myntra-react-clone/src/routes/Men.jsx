import React from 'react'
import HomeItem from "../components/HomeItem";
import {useSelector} from "react-redux";
const Men = () => {
  return (
     <main>
        <div className="items-container">
            {items.map(items => (<HomeItem key={items.id} item= {items}></HomeItem>
        ))}
            
        </div>
    </main>
  )
}

export default Men;