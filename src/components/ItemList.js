import React from 'react'
import Dashboard from './Dashboard'

const ItemList = () => {
    
    const itemList = ["Buyer's Agent Agreement", "Lead Form", "Offer Letter", "Seller's Disclosure Notice", "Purchase and Sale Agreement", "Inspection Report", "Title Insurance Policy", "Property Deed"]

    function renderItems(){
        itemList.map(result => {
            return result 
          })
    }

    return(
        <Dashboard result={() => renderItems()}/>
    )
}


export default ItemList
