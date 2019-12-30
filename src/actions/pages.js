export const addPage = ( title ) => ( {
  type: 'ADD_PAGE',
  payload: {
    title
  }
} );

export const selectPage = ( page ) => ( {
  type: 'SELECT_PAGE',
  payload: {
    page
  }
} );
