import React from 'react'
import './Data.css'
const Data = ({date,value,heading,para}) => {


  return (
    <div>
        <div className="data">

            <div className='data_date'>{date} <i style={{fontSize:'4px', margin:'10px', opacity:'0.6'}} class="bi bi-square-fill"></i>  {value}</div>

            <div className='data_heading'><h1>{heading}</h1></div>

            <div className='data_para'><p>{para}</p></div>

            <div className="button">
                <button>Continue reading <i class="bi bi-chevron-double-right"></i></button>
            </div>

        </div>
    </div>
  )
}

export default Data