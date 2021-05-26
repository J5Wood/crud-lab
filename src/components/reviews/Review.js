import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }
};

export default Review;
