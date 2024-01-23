import React from "react";
import teamBuildLogo from '../images/icon-team-builder.svg'
import calculatorLogo from '../images/icon-calculator.svg'
import karmaLogo from '../images/icon-karma.svg'
import supervisior from '../images/icon-supervisor.svg'
// import '../style/main.css'

// Helping data
const data = [
{
    title: 'Team Builder',
    article: 'Scans out talented network to create the optimal team for you project',
    url: teamBuildLogo,
},
{
    title: 'Calculator',
    article: 'Scans out talented network to create the optimal team for you project',
    url: calculatorLogo,   
},
{
    title: 'Karma',
    article: 'Scans out talented network to create the optimal team for you project',
    url: karmaLogo,
},
{  
    title: 'Supervisior',
    article: 'Scans out talented network to create the optimal team for you project',
    url: supervisior,
}
]

// Image element -------------------------------
const Image = (props) => {
    return <img src={props.url} alt='logo'></img>
}

// Box element ---------------------------------
const BoxElement = (props) =>{
    return (
        <article>
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
    

    render(props){
const mainStyle = {
    border: '1px solid red',
    width: '250px',
    height: '250px',
}
const box = {
    border: '1px solid blue',
}
const boxTop = {
    border: '1px solid black',
}
//----------- Data from App/props ----------
const thatData = props
console.log(thatData)
// const {title, article, url} = thatData

// create by map() forEach 
let titleOne = data[0].title
let articleOne = data[0].article
let urlOne = data[0].url

        return(
            <main style={mainStyle}>
                <div>
                    <BoxElement style={boxTop}
                    title = {titleOne}
                    article = {articleOne}
                    url = {urlOne}
                    />
                </div>
                {/* <div>
                    <BoxElement/>
                </div>
                <div>
                    <BoxElement/>
                </div>
                <div>
                    <BoxElement/>
                </div> */}
            </main>
        )
    }
}

export default Main