import React from "react";
import teamBuildLogo from '../images/icon-team-builder.svg'
import calculatorLogo from '../images/icon-calculator.svg'
import karmaLogo from '../images/icon-karma.svg'
import supervisior from '../images/icon-supervisor.svg'
// import '../style/main.css'

//Style
const boxStyle = {        
    border: '1px solid blue',
    
}
const boxTop = {
    backgroundColor: 'lightPink',
    border: '1px solid black',
    fontSize: '12px',
}
const boxLeft = {
    border: '1px solid red',
    backgroundColor: 'lightgray',
    fontSize: '12px',

}
const boxRight = {
    border: '1px solid yellow',
    backgroundColor: 'lightYellow',
    fontSize: '12px'

}
const boxBottom = {
    border: '1px solid blue',
    backgroundColor: 'lightblue',
    fontSize: '12px',
}

// Image element -------------------------------
const Image = (props) => {
    return <img src={props.url} alt='logo'></img>
}

// Box element ---------------------------------
const BoxElement = (props) =>{
    return (
        <article style={props.style}>
            <div>
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
            </div>
        </article>
    )
}


// Main component ------------------------------------
class Main extends React.Component {
    constructor(props) {
        super(props)   
    }
    render(){
        const mainStyle = {
            border: '1px solid red',
            width: '100vh',
            height: '80vh',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
//----------- Data from App/props ----------
// Data sent from App file
// const {title,article,url} = this.props.myData[0]

        return(
            <main style={mainStyle}>
                <div>
                    <BoxElement style={boxTop}
                    title = {this.props.myData[0].title}
                    article = {this.props.myData[0].article}
                    url = {this.props.myData[0].url}
                    />
                </div>
                <div>
                    <BoxElement style={boxLeft}
                    title = {this.props.myData[1].title}
                    article = {this.props.myData[1].article}
                    url = {this.props.myData[1].url}
                    />
                </div>
                <div>
                    <BoxElement style={boxRight}
                    title = {this.props.myData[2].title}
                    article = {this.props.myData[2].article}
                    url = {this.props.myData[2].url}
                    />
                </div>
                <div>
                    <BoxElement style={boxBottom}
                    title = {this.props.myData[3].title}
                    article = {this.props.myData[3].article}
                    url = {this.props.myData[3].url}
                    />
                </div>
            </main>
        )
    }
}

export default Main