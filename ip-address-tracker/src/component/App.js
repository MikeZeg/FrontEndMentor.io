import '../styles/appStyle.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer.js'
import myData from '../API/GeoAPI.js';

function App() {
  
  return (
    <div >
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}
export default App;
