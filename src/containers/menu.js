import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { changePage } from '../redux/actions/menu';

const mapStateToProps = () => ({
  name: 'bars',
  size: 30,
});

const mapDispatchToProps = dispatch => ({
  onPress: () => {
    console.log('handleMenu');
    dispatch(changePage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FontAwesome);
