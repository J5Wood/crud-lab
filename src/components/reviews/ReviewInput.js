import React, { Component } from 'react';

class ReviewInput extends Component {

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
    const newReview = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(newReview)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        New Review
        <br/>
        <input type='text' value={this.state.text} onChange={this.handleOnChange}/>
        <br/>
        <input type='submit' />
      </form>
    );
  }
};

export default ReviewInput;
