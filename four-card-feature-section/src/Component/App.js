import React from 'react';
import '../style/App.css';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

const data = [{
  title: 'Team Builder',
  article: 'Scans out talented network to create the optimal team for you project',
  url: "url('../../images/icon-team-builder.svg)"
},
{
  title: 'Team Builder',
  article: 'Scans out talented network to create the optimal team for you project',
  url: "url('../../images/icon-team-builder.svg)"   
},
{
  title: 'Team Builder',
  article: 'Scans out talented network to create the optimal team for you project',
  url: "url('../../images/icon-team-builder.svg)"
},
]

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>

{/* App All Ready to use.
Create Compontents - Headeer, Main, Footer
Made Css file to all components<
add font family
check how add SASS */}

        <Header/>
        <Main/>
        <Footer/>
      </div>
    )};
}

export default App;
