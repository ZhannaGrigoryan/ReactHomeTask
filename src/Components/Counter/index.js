import { Component } from "react";


class Counter extends Component{
    constructor(props){
        super(props)
        this.state ={
          count: 0,
          minValue:'',
          maxValue:'',
          step:''
          


        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSub = this.handleSub.bind(this)
        this.handleReset = this.handleReset.bind(this)
      }
      

      handleAdd(){
        const {count,maxValue} = this.state
        if(maxValue){
            if(count<maxValue){
                this.setState({
                    count:this.state.count + +this.state.step
                })
            }
        }else{
            this.setState({
                count:this.state.count + +this.state.step
            })
        }
     
      }

      handleSub(){
        const {count,minValue} = this.state
        if(minValue){
            if(count>minValue){
                this.setState({
                    count:this.state.count - +this.state.step
                })
            }
        }else{
            if(count>0){
                this.setState({
                    count:this.state.count - +this.state.step
                })
            }
            
        }
        
      }

      addChange =(e) =>{
        this.setState({
            maxValue:e.target.value
        })
      }

      subChange =(e) =>{
        this.setState({
            minValue:e.target.value
        })
      }

      stepChange =(e) =>{
        this.setState({
            step:e.target.value
        })
      }

     handleReset(){
        if(this.state.minValue){
            this.setState({
                count: +this.state.minValue
            })
        }else{
            this.setState({
                count: 0
            })
        }
        
     }


    render(){
        const {count,maxValue,minValue,step} = this.state
        return(
            <div className="containerFirst">
                <div>
                <button className="buttonClick" onClick={this.handleAdd}>+</button>
                <span className="count">count {count}</span>
                <button  className ="buttonClick"onClick={this.handleSub}>-</button>
                <button onClick={this.handleReset}>Reset</button>
                </div> <br/> 
                <div>
                <input onChange={this.subChange} value={minValue} placeholder="MinValue"/>
                <input onChange={this.stepChange} value={step} placeholder="Step"/>
                <input onChange={this.addChange} value={maxValue} placeholder="MaxValue"/>
                </div>
            </div>
        )
    }
}

export default Counter