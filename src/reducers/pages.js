import Page from '../domain/Page';

const initialState = [];

export default function( state = initialState, action ) {
  console.log(state, action)
  switch ( action.type ) {
    case 'ADD_PAGE':
      const { title } = action.payload;
      const newPage = new Page( title );

      return [
        ...state,
        newPage
      ];
    default:
      return state;
  }
};
