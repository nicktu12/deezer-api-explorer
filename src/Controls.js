import React from 'react';
import { connect } from 'react-redux';
import { inputValueAction } from './Controls-actions';

class Controls extends React.Component { 
  
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    if (this.state.inputValue.length >= 3) {
      this.props.searchInputValue(this.state.inputValue)
    }
    return (
      <input type="text" placeholder="Search here" onChange={this.inputChange}/>
    )
  }

};

const mapDispatchToProps = dispatch => {
  return {
    searchInputValue: (inputValue) => dispatch(inputValueAction(inputValue))
  }
};

export default connect(null, mapDispatchToProps)(Controls)
