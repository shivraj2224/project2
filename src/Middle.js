import React from 'react'

function Middle({ Image, Heading, Text}) {
    return (
        <div className='middle'>
            <img src={Image} alt={Heading} />
            <h3>{Heading}</h3>
            <p>{Text}</p>
        </div>
    )
}

export default Middle
