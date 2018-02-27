import React from 'react';
import { connect } from 'react-redux';
import searchInputValue from './Controls-actions';

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
      this.props.searchInputAction(this.state.inputValue)
    }
    return (
      <input type="text" placeholder="Search here" onChange={this.inputChange}/>
    )
  }

};

const mapStateToProps = store => ({
  autocompleteOptions: store.autocompleteOptions,
});

const mapDispatchToProps = dispatch => {
  return {
    searchInputAction: (inputValue) => dispatch(searchInputValue(inputValue))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
