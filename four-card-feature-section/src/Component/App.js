import React from 'react';
import '../style/App.css';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

import teamBuildLogo from '../images/icon-team-builder.svg'
import calculatorLogo from '../images/icon-calculator.svg'
import karmaLogo from '../images/icon-karma.svg'
import supervisior from '../images/icon-supervisor.svg'


// Data - destruction that data and send to component by PROPS
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

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
// Data to destruction - made destruction in App not in Main
console.log(data[0])
const sendData = data[0]

// console.log(myData)

    return (
      <div>

{/* App All Ready to use.
Create Compontents - Headeer, Main, Footer
Made Css file to all components<
add font family
check how add SASS */}

        <Header />
        <Main 
          myData = {sendData}
        />
        <Footer/>
      </div>
    )};
}

export default App;
