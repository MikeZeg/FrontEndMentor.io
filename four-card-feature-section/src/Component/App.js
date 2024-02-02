import React from 'react';
import '../styles/App.css';
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
      article: 'Used data from past projects to provide beter delivery estimates',
      url: calculatorLogo,   
    },
    {
      title: 'Karma',
      article: 'Regularly evaluates our talent to ensure quality',
      url: karmaLogo,
    },
    {  
      title: 'Supervisior',
      article: 'Monitors activity to identify project roadblocks',
      url: supervisior,
    }
]

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {

// Data to destruction - made destruction in App not in Main
    const myData = data

    const appStyle = {
      backgroundColor: 'hsl(0, 0%, 98%)',
    }

    return (
      <div style={appStyle}>
        <Header />
        <Main 
          myData = {myData}
        />
        <Footer/>
      </div>
    )};
}

export default App;
