import React from 'react';

class Controls extends React.Component { 
  
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <input type="text" placeholder="Search here" onChange={this.inputChange}/>
    )
  }

};

export default Controls;
