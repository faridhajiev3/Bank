import React from 'react'
import "./newCard.css"
function NewCard() {
    return (
        <div className='newcard'>
            <div>
                <p className='letters'>Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
            </div>
            <div className='type'>
                <div className='em'>
                    <p className='label'>Card Type</p>
                    <input className='classic' placeholder='Classic' type="text" />
                    <p className='label'>Card Number</p>
                    <input className='classic' placeholder='**** **** **** ****' type="text" />
                </div>
                <div className='em'>
                    <p className='label'>Name On Card</p>
                    <input className='classic' placeholder='My Cards' type="text" />
                    <p className='label'>Expiration Date</p>
                    <input className='classic' placeholder='25 January 2025' type="text" />
                </div>
            </div>
            <div>
                <button className='prop'>Add Card</button>
            </div>
        </div>
    )
}

export default NewCard