import { connect } from 'react-redux';
import { changePage } from '../redux/actions/menu';
import Menu from '../components/AppBar/Menu';

const mapStateToProps = state => ({
  open: state.menu.open,
});

const mapDispatchToProps = dispatch => ({
  onPress: (route, navigate) => {
    dispatch(changePage(route));
    navigate(route);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
