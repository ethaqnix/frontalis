import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { handleSearch } from '../../redux/actions/search';

const mapStateToProps = () => ({
  name: 'search',
  size: 30,
});

const mapDispatchToProps = dispatch => ({
  onPress: () => {
    dispatch(handleSearch());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FontAwesome);
