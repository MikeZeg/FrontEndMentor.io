import React from "react";
import MapComponent from '../API/MapAPI'
import '../styles/mainStyle.css'
import { myData } from '../API/GeoAPI'


class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <main className="mainStyle">
            <MapComponent className='mainStyle'/>
        </main>
    )}
}
export default Main