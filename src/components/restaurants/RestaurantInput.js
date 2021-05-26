import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        New Restaurant
        <br/>
        <input 
          type='text'
          value={this.state.text}
          onChange={this.handleOnChange}/>
        <br/>
        <input type='submit'/>
      </form>
    );
  }
};

export default RestaurantInput;
