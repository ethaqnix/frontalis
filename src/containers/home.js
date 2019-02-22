import { connect } from 'react-redux';
import TravelList from '../components/TravelList';

// console.log(constructQuery('travels'));
const mapStateToProps = state => ({
  travels: [{
    locations: ['Pontarlier', 'Lausanne'],
    startAt: new Date('2019-2-17T06:24:00'),
    endAt: new Date('2019-2-17T07:54:00'),
  }],
});
const mapDispatchToProps = () => ({
  initData: () => {
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelList);
