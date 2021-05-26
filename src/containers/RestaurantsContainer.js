import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  handleAddRestaurant = restaurant => {
    this.props.addRestaurant(restaurant)
  }

  handleDeleteRestaurant = restId => {
    this.props.deleteRestaurant(restId)
  }

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.handleAddRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.handleDeleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', payload: restaurant}),
    deleteRestaurant: restId => dispatch({type: 'DELETE_RESTAURANT', payload: restId})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
