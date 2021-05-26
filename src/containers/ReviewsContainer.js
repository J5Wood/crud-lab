import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  addNewReview = review => {
    this.props.addReview(review)
  }

  filterReviews = () => {
    return this.props.reviews.filter( review => review.restaurantId === this.props.restaurant.id)
  }

  handleDeleteReview = reviewId => {
    this.props.deleteReview(reviewId)
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.addNewReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.filterReviews()} deleteReview={this.handleDeleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review: review}),
    deleteReview: reviewId => dispatch({ type: 'DELETE_REVIEW', reviewId: reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
