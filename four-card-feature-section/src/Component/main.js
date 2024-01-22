import React from "react";
import teamBuildLogo from '../images/icon-team-builder.svg'
import calculatorLogo from '../images/icon-calculator.svg'
import karmaLogo from '../images/icon-karma.svg'
import supervisior from '../images/icon-supervisor.svg'
// import '../style/main.css'

const data = [{
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

const Image = () => {
    return <img src={teamBuildLogo} alt='logo'></img>
}

// Element for all boxes 
const BoxElement = () =>{
    return (
        <article>
            <section>
                <h1>
                Team Builder
                </h1>
            </section>
            <section>
                <h2> 
                Scans out talented network to create the optimal team for you project
                </h2>
            </section>
            <figure>
{/* Add element with prop for all boxes*/}
                <Image />
            </figure>
        </article>
    )
}


class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
const style = {
    border: '1px solid red',
    width: '250px',
    height: '250px',
}
        return(
            <main style={style}>
                <BoxElement/>
            </main>
        )
    }
}

export default Main