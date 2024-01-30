import React from "react";
import '../styles/headerStyle.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="header_Style">
                <h1 className="h1_Font font_Color font_Margin_Top">Reliable, efficient delivery</h1>
                <h1 className="h1_Font font_Weight font_Margin_Cancel">Powered by Technology</h1>
                <h1 className="h2_Font font_Color">
                    Our Articial Intelligence Powerade tools use millions of project data points to ensure that you project is successful
                </h1>
            </header>
        )
    }
}

export default Header
