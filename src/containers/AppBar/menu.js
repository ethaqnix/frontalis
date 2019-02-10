import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { handleMenu } from '../../redux/actions/menu';

const mapStateToProps = () => ({
  name: 'bars',
  size: 16,
});

const mapDispatchToProps = dispatch => ({
  onPress: () => {
    dispatch(handleMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FontAwesome);
