import React from 'react'
import './styles/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='empty'></div>
            <div className='cont1'>
                <h3 className='Ques'>Questions? Call 000-800-040-1843</h3>
                <div className='ListContainer'>
                    <div className='List1 list'>
                        <h4>FAQ</h4>
                        <h4>Investor Relations</h4>
                        <h4>Privacy</h4>
                        <h4>Speed Test</h4>
                    </div>
                    <div className='List2 list'>
                        <h4>Help Centre</h4>
                        <h4>Jobs</h4>
                        <h4>Cookie Preferences</h4>
                        <h4>Legal Notices</h4>
                    </div>
                    <div className='List3 list'>
                        <h4>Account</h4>
                        <h4>Ways to Watch</h4>
                        <h4>Corporate Information</h4>
                        <h4>Only on Netflix</h4>
                    </div>
                    <div className='List4 list'>
                        <h4>Media Center</h4>
                        <h4>Terms of Use</h4>
                        <h4>Contact Us</h4>
                        <h4>  </h4>
                    </div>
                </div>
                <h3 className='netflix'>Netflix India</h3>
            </div>
        </div>
    )
}

export default Footer
