import { connect } from 'react-redux';
import { changeSearch } from '../redux/actions/search';
import Search from '../components/AppBar/Search';

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  onChangeSearch: (newSearch) => {
    dispatch(changeSearch(newSearch));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
