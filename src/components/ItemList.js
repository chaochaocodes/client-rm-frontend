import React from 'react'
import Dashboard from './Dashboard'

const ItemList = () => {
    
    const itemList = ["Buyer's Agent Agreement", "Lead Form", "Offer Letter", "Seller's Disclosure Notice", "Purchase and Sale Agreement", "Inspection Report", "Title Insurance Policy", "Property Deed"]

    function renderItems(){
        return itemList.map(result => {
            <Dashboard result={result}/> 
          })
    }

    return(
        <div>
            {renderItems()}
        </div>
    )
}


export default ItemList
