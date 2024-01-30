import React from "react";
import teamBuildLogo from '../images/icon-team-builder.svg'
import calculatorLogo from '../images/icon-calculator.svg'
import karmaLogo from '../images/icon-karma.svg'
import supervisior from '../images/icon-supervisor.svg'
import { style } from '../styles/mainStyle.css'



// Image element -------------------------------
const Image = (props) => {
    return <img src={props.url} alt='logo'></img>
}

// Box element ---------------------------------
const BoxElement = (props) =>{
    return (
        
        <article className={props.style}>
                <section>
                    <h1>
                        {props.title}
                    </h1>
                </section>
                <section>
                    <h2>
                        {props.article}
                    </h2>
                </section>
                <figure>
{/* Add element with prop for all boxes*/}
                    <Image url={props.url}/>
                </figure>
        </article>
    )
}

// ---------------------------------------------------------------------
// ---------------------------Main component ---------------------------
class Main extends React.Component {
    constructor(props) {
        super(props)   
    }
    render(){
        return(
            <main className="main_Style">
                
                    <BoxElement style={'box_Top'}
                    title = {this.props.myData[0].title}
                    article = {this.props.myData[0].article}
                    url = {this.props.myData[0].url}
                    />
                
                    <BoxElement style={'box_Left'}
                    title = {this.props.myData[3].title}
                    article = {this.props.myData[3].article}
                    url = {this.props.myData[3].url}
                    />
                
                    <BoxElement style={'box_Right'}
                    title = {this.props.myData[1].title}
                    article = {this.props.myData[1].article}
                    url = {this.props.myData[1].url}
                    />
                
                    <BoxElement style={'box_Bottom'}
                    title = {this.props.myData[2].title}
                    article = {this.props.myData[2].article}
                    url = {this.props.myData[2].url}
                    />
                
            </main>
        )
    }
}

export default Main