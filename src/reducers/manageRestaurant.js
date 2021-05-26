import cuid from 'cuid';

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    }, action) {
    
    switch (action.type) {
        
        case 'ADD_RESTAURANT':
            const rest = {
                text: action.payload,
                id: cuid()
            }
            return {
                ...state, restaurants: [
                    ...state.restaurants, rest
                ]
            }

        case 'DELETE_RESTAURANT':
            return {
                ...state, 
                restaurants: state.restaurants.filter( rest => rest.id !== action.payload )
            }

        case 'ADD_REVIEW':
            const rev = {
                text: action.review.text,
                id: cuid(),
                restaurantId: action.review.restaurantId
            }
            return {
                ...state,
                reviews: [
                    ...state.reviews, rev
                ]
            }

        case 'DELETE_REVIEW':
            return {
                ...state,
                reviews: state.reviews.filter( review => review.id !== action.reviewId)
            }

        default:
            return state
    }
}
