import { Component } from "react";
import Card from "../Card";

class Wrapper extends Component {
    constructor(){
        super()
        this.state = {
            isHidden: false,

        }
    }

    handleHidden = () =>{
        this.setState({
            isHidden: !this.state.isHidden
        })

    }

    render(){
        const {isHidden}=this.state
        return(
            <div>
            {!isHidden?<Card  hide = {this.handleHidden} list={this.props.list}/>:<div className="div"><button onClick={this.handleHidden}>show</button></div>}
                </div>
        )
    }
}

export default Wrapper