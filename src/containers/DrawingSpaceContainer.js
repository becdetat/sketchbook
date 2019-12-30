import DrawingSpace from '../components/DrawingSpace';
import { connect } from 'react-redux';

const mapStateToProps = function( state ) {
  return {
    page: state.currentPage
  };
};

const mapDispatchToProps = function( dispatch ) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( DrawingSpace );
