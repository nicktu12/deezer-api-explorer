import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchInputValue, searchSubmit } from './Controls-actions';

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

  inputSelect = () => {
    const selected = document.getElementById('myInput').value;
    const selectedObject = this.props.autocompleteOptions.find(option => (
      option.name === selected
    ))
    const selectedId = selectedObject.id;
    this.props.searchSubmitAction(selectedId);
  }

  render() {
    if (this.state.inputValue.length >= 3) {
      this.props.searchInputAction(this.state.inputValue)
    }
    return (
      <div>
        <input 
          id="myInput"
          type="text" 
          placeholder="Search here" 
          onChange={this.inputChange}
          list="suggestions"
        />
        {
          !!this.props.autocompleteOptions.length &&
            <datalist id="suggestions">
              <option value="Search Results">Search Results</option>
            {
              this.props.autocompleteOptions.map(option => (
                <option data-id={option.id}>{option.name}</option>
              ))
            }
            </datalist>
        }
        <button onClick={this.inputSelect}>Submit</button>
      </div>
    )
  }

};

const mapStateToProps = store => ({
  autocompleteOptions: store.autocompleteOptions,
});

const mapDispatchToProps = dispatch => {
  return {
    searchInputAction: (inputValue) => dispatch(searchInputValue(inputValue)),
    searchSubmitAction: (artistId) => dispatch(searchSubmit(artistId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

Controls.propTypes = {
  autocompleteOptions: PropTypes.arrayOf(PropTypes.string),
  searchInputAction: PropTypes.func,
  searchSubmitAction: PropTypes.func,
};
