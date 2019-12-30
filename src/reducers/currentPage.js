const initialState = null;

export default function( state = initialState, action ) {
  switch ( action.type ) {
    case 'SELECT_PAGE':
      const { page } = action.payload;

      return page;
    default:
      return state;
  }
}
