import React from 'react';

class Controls extends React.Component { 
  
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  render() {
    return (
      <input type="text" placeholder="Search here" />
    )
  }

};

export default Controls;
