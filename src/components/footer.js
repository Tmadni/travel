import React from 'react'
import "./footer.css"

function footer() {
    return (
        <>
        <div className="footer-start">
        <span><a href="/aboutus">About Us</a></span> | <span><a href="/aboutus">Contact Us</a></span> | <span><a href="/aboutus">Privacy</a></span> | <span><a href="/aboutus">Terms And Conditions</a></span>
            
        </div>
        <div className="footer-next">
            <h6>© 2021 TravelHelpers • Built with React</h6>
        </div>
        </>

    )
}

export default footer
