import React from 'react'
import Middle from './Middle'
import logo_html from './assets/logo_html.png';
import logo_css from './assets/logo_css.png';
import logo_brush from './assets/logo_brush.png';


function Main() {
    return (
        <div className='main'>
            <div className='top'>
                <div className='subscribe'>
                    <h3>Subscribe to Our NewsLetter</h3>
                </div>
                <div className='input'>
                    <input type='text' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='center'>
                <Middle Image={logo_html} 
                    Heading="HTML5 Markup"
                    Text="Dolorem laudantium, nam optio enum debitis placeat 
                    tenetur nulla totam quod molestiae vitae perspiciatis commodi maiores ea facilis veniam 
                    voluptates. Debitis, enim" />
                <Middle Image={logo_css} 
                    Heading="CSS 3 Styling"
                    Text="Dolorem laudantium, nam optio enum debitis placeat 
                    tenetur nulla totam quod molestiae vitae perspiciatis commodi maiores ea facilis veniam 
                    voluptates. Debitis, enim" />
                <Middle Image={logo_brush} 
                    Heading="Graphic Design"
                    Text="Dolorem laudantium, nam optio enum debitis placeat 
                    tenetur nulla totam quod molestiae vitae perspiciatis commodi maiores ea facilis veniam 
                    voluptates. Debitis, enim" />

            </div>
            <div className='down'>
                <h6 className='down__t'>Access Web Designers, copyright @ 2020</h6>
            </div>
        </div>
    )
}

export default Main
