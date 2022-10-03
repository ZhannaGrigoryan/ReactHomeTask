import { Component } from 'react';
import Wrapper from './Components/Wrapper'
import {data} from './Constants/data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list:data,
      showUnmountingCount: false
    }
  }


  handleShowUnmountingCount = () => {
    this.setState({showUnmountingCount:!this.state.showUnmountingCount})
  }

  
 render(){
  const {list} = this.state
  return (
      <>
    <div className="App">
      {list.map(image => <Wrapper key = {image.id} list={image} src={image.image}/>) }
      
    </div>
    <div>
     <button onClick={this.handleShowUnmountingCount}>Show Unmounted</button>
        {this.state.showUnmountingCount?<div>{list.map(el => <div key={el.id}>{`title${el.id}: unmounted ${el.unmounted}`}</div>)}</div>:''}
     </div>
     </>
  );
 } 
}

export default App;