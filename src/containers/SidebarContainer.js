import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = function( state ) {
  return {
    pages: state.app.pages,
    currentPageId: state.app.currentPageId,
  };
};

const mapDispatchToProps = function( dispatch ) {
  return {
    addPage: (title) => dispatch( { type: 'ADD_PAGE', payload: { title } } ),
    selectPage: ( page ) => dispatch( { type: 'SELECT_PAGE', payload: { page } } ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Sidebar );
