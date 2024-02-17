import React from "react";
import MapComponent from '../API/MapAPI'
import '../styles/mainStyle.css'

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <main className="mainStyle">
            <MapComponent/>   
        </main>
    )}
}

export default Main