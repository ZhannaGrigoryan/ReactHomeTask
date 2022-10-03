import { Component } from "react";
import Flag from "./Components/Flag";
import {DATA} from './Constants/List'

class App extends Component {
    constructor(props){
        super(props)
        this.duplicate =[]
        this.state = {
            myData:[],
            input: ''
        }
    }

    componentDidMount(){
        new Promise ((res,rej) =>{
            res(DATA)
        }).then(res=>JSON.parse(res)).then(res=>{
            this.setState({myData:res})
            this.duplicate = res
        })
    }

    componentDidUpdate(prevProps,prevState){
       if(prevState.input !== this.state.input){
        if(this.state.input.length){
            this.setState({
                myData:this.duplicate.filter(item => item.country.toLowerCase().includes(this.state.input.toLowerCase()))
            })
        }else{
            this.setState({myData:this.duplicate})
        }
       }
    }

    handleChange =(e) =>{
    this.setState({input:e.target.value})
    }

    render(){
     const {myData,input}= this.state
     return (
        <>
         <div>
            <h1>Search the country</h1>
            <input placeholder="search the country" onChange={this.handleChange} value={input} type='text'/>
            </div>
         <div className = "containerSecond">
         {myData.map(item=> <Flag key = {item.id} {...item}/>)}
         </div>
          </>
    )
    }
}

export default App