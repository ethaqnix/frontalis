import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { handleMenu } from '../../redux/actions/menu';

const mapStateToProps = () => ({
  name: 'bars',
  size: 30,
});

const mapDispatchToProps = dispatch => ({
  onPress: () => {
    console.log('handleMenu');
    dispatch(handleMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FontAwesome);
