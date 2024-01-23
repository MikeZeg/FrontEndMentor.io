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
const data = [{
  title: 'Team Builder',
  article: 'Scans out talented network to create the optimal team for you project',
  url: teamBuildLogo,
},
{
  title: 'Calculator',
  article: 'Scans out talented network to create the optimal team for you project',
  url: calculatorLogo
},
{
  title: 'Team Builder',
  article: 'Scans out talented network to create the optimal team for you project',
  url: karmaLogo,
},
{
  title: 'Team Builder',
  article: 'Scans out talented network to create the optimal team for you project',
  url: supervisior,
}
]

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const myData = {
      title: 'Work',
      article: 'Lorem cos tam by sprawdzic',
      url: supervisior,
    }
    return (
      <div>

{/* App All Ready to use.
Create Compontents - Headeer, Main, Footer
Made Css file to all components<
add font family
check how add SASS */}

        <Header />
        <Main elements={myData}/>
        <Footer/>
      </div>
    )};
}

export default App;
