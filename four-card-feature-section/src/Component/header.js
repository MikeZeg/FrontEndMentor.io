import React from "react";
// import '../style/header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
// h1 diffrent fontWeight and style, h2 small font size and color
            <header >
                <h1>Reliable, effecient delivery</h1>
                <h1>Powered by Technology</h1>
                <h2>Our Articial Intelligence Powerade tools use millions of project data points to ensure that you project is successful</h2>
            </header>
        )
    }
}

export default Header
