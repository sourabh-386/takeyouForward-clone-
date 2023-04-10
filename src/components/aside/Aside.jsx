import React from 'react'
import './Aside.css'
const Aside = () => {
    return (
        <div>
            <div className='aside'>

                <h2 className="aside_sub">Subscribe</h2>
                <p className='aside_para'>I want to receive latest posts and interview tips</p>
                <br />
                <div className="aside_form">
                    <p>Name*</p>
                    <input type="text" placeholder='john' />
                    <br />
                    <br />
                    <p>Email*</p>
                    <input type="email" placeholder='abc@gmail.com' />
                    <button className='aside_btn'>Join takeUforward</button>
                </div>
<br />
<br />
                <div className="aside_search">
                    <p>Search</p>
                    <div className='aside_search_btn'>
                        <input type="text" />
                        <button>Search</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aside