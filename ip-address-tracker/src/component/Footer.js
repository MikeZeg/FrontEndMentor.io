import React from "react";
import '../styles/footerStyle.css'

// Hover actions
function onHover(event) {
    event.target.style.color = 'yellow';
    
   }
   function offHover(event) {
    event.target.style.color = 'hsl(0, 0%, 7%)';
   }


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <footer>
                <div className="footerStyle"> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="frontEndStyle" > Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/MikeZeg" target="_blank" className="mikeZegStyle" > MikeZeg</a>.
                </div>
            </footer>
        )
    }
}

export default Footer