 import { Component } from "react";

 class Card extends Component{



  componentWillUnmount(){
    this.props.list.unmounted++
  }

    render(){
        console.log(this.props);
        return(
            <div>
                <div className="EachCard">
                    <button className="button" onClick={this.props.hide}>X</button>
                    <img src={this.props.list.image} alt="" />
                </div>
            </div>

        )
    }
 }
 export default Card