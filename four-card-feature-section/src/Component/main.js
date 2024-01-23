import React from "react";
import teamBuildLogo from '../images/icon-team-builder.svg'
import calculatorLogo from '../images/icon-calculator.svg'
import karmaLogo from '../images/icon-karma.svg'
import supervisior from '../images/icon-supervisor.svg'
// import '../style/main.css'

// Helping data
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

// Image element -------------------------------
const Image = (props) => {
    return <img src={teamBuildLogo} alt='logo'></img>
}

// Box element ---------------------------------
const BoxElement = (props) =>{
    return (
        <article>
            <div>
                <section>
                    <h1>
                        {/* {props.title} */}
                        Team Builder
                    </h1>
                </section>
                <section>
                    <h2>
                        {/* {props.article} */}
                    Scans out talented network to create the optimal team for you project
                    </h2>
                </section>
                <figure>
{/* Add element with prop for all boxes*/}
                    <Image />
                </figure>
            </div>
        </article>
    )
}

// Main component ------------------------------------
class Main extends React.Component {
    // constructor(props) {
    //     super(props)   
    // }
    
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
// console.log(props.myData)

        return(
            <main style={mainStyle}>
                <div >
                    <BoxElement elements = {props} style={boxTop}/>
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