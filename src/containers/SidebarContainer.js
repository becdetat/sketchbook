import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = function( state ) {
  return {
    pages: state.app.pages,
  };
};

const mapDispatchToProps = function( dispatch ) {
  return {
    addPage: (title) => dispatch( { type: 'ADD_PAGE', payload: { title } } ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Sidebar );
