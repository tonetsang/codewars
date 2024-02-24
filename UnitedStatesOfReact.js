import React from 'react';

export class States extends React.Component {
  constructor() {
    super();
    this.state = {
      united : false
    }
    this.unite = this.unite.bind(this)
  }
  
  unite(){
    this.setState({
      united: !this.state.united
    })
  }
  
  render() {
    return <div className="status">{
      !this.state.united ? "Make America code again" : "Code for everyone"
    } 
    </div>
  } 
}