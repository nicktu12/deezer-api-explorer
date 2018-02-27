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

/*  shouldComponentUpdate(nextProps) {*/
    //console.log(nextProps, this.props)
    //if (this.props.autocompleteOptions.length) {
      //return nextProps.autocompleteOptions === this.props.autocompleteOptions;
    //} else {
      //return true
    //}
  //}

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
      <div>
        <input 
          type="text" 
          placeholder="Search here" 
          onChange={this.inputChange}
          list="suggestions"
        />
        {
          !!this.props.autocompleteOptions.length &&
            <datalist id="suggestions">
            {
              this.props.autocompleteOptions.map(option => (
                <option value={option}></option>
              ))
            }
            </datalist>
        }
      </div>
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
