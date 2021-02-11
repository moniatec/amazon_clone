export const initialState = {
    basket: [
        {
            id: '12321341',
            title: 'The Lean Startup',
            price: 11.96,
            rating: 5,
            image: 'https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg',
        },
    ],
    user: null,
}

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            return { state }
            break;
        // case'ADD_TO_BASKET':
        //     break;
        default:
            return state;
    }
}

export default reducer;