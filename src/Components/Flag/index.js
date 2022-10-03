import { Component } from "react";


class Flag extends Component{
    
    render(){
        const {id, country, src} = this.props
        return(
            <div>
                <img src={src} alt = {id}></img>
                <div>{country}</div>
            </div>
        )
    }
}

export default Flag;