import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchInputValue, searchSubmit } from './Controls-actions';
import { select } from 'redux-saga/effects';

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
    if (this.props.autocompleteOptions.length > 0) {
      document.getElementsByClassName("suggestions")[0].style.top = 'calc(10vh + 60px)';
    }
  }

  inputSelect = (id) => {
    this.props.searchSubmitAction(id);
    document.getElementsByClassName("suggestions")[0].style.top = '-1000px';
    const selectedOption = this.props.autocompleteOptions.find(option => (
      option.id === id
    ))
    this.setState({
      inputValue: selectedOption.name,
    });
  }

  handleSubmit = () => {
    const selected = document.getElementById('myInput').value;
    const selectedObject = this.props.autocompleteOptions.find(option => (
      option.name.toLowerCase() === selected.toLowerCase()
    ))
    const selectedId = selectedObject.id;
    this.props.searchSubmitAction(selectedId);
    document.getElementsByClassName("suggestions")[0].style.top = '-1000px';
  }

  render() {
    if (this.state.inputValue.length >= 3) {
      this.props.searchInputAction(this.state.inputValue)
    }
    return (
      <div className="search-bar">
        <input 
          id="myInput"
          type="text" 
          placeholder="Search here" 
          onChange={this.inputChange}
        />
        {
          this.props.autocompleteOptions.length > 0 &&
            <ul className="suggestions">
              <li>Search Results</li>
            {
              this.props.autocompleteOptions.map(option => (
                <li 
                  className="autocomplete-option"
                  onClick={() => this.inputSelect(option.id)}
                >
                  {option.name}
                </li>
              ))
            }
            </ul>
        }
        <button onClick={this.handleSubmit}>Submit</button>
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
