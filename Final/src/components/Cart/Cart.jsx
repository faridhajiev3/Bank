import React from 'react'
import "./cart.css"
import { SiMastercard } from "react-icons/si";

function Cart({background, color, ic}) {
    return (
        <div>
            <div className='blue-cart' style={{background:background, color:color}}>
                <div className='first'>
                    <div>
                        <p className='balance'>Balance</p>
                        <p className='money'>$5,756</p>
                    </div>
                    <img className='mark' src="https://s3-alpha-sig.figma.com/img/6f2e/6ae8/177a4ce3a2803414348e09c79e61df4f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kR~aVFfbgrERR-OffT71C5Mxo4osxPGhPMAaG6OvZzeMS462x6OrtWMV6g~DR88JHkAyEjULBe2rzrnMIRtFpPfFJzsaZy8hjTXx1S4BYKk96uK-En8HftoCMzfdWNoFj13-O521VaK2nc2gen05tAIk6i7blZEXYO-j9IPFpaSrf1CFHNtl2NuoWJkwCcnlxJUvV7eujWaPTnRD6vdjb0CevW5a1trd2AUeeGxDGg9h3zkg5NekvvTNJN0xXPN48ikStMgfHio~mo3IiD41DbM1K59pHo02UFpGqmXqlE1kfEO5CcmyQqZSqSNLDc-wRrFLFlszegAjSqzEJJQMIg__" alt="" />
                </div>
                <div className='second'>
                    <div className='div1'>
                        <p className='gri'>CARD HOLDER</p>
                        <p className='secret'>Eddy Cusuma</p>
                    </div>
                    <div className='div2'>
                        <p className='gri'>VALID THRU</p>
                        <p className='secret'>12/22</p>
                    </div>
                </div>
                <div className='third'>
                    <p className='important'>3778 **** **** 1234</p>
                    <SiMastercard className='master' style={{color:ic}}/>
                </div>
            </div>
        </div>
    )
}

export default Cart