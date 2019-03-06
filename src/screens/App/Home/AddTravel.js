import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';
import { Mutation } from 'react-apollo';
import DateTimePicker from '../../../components/Picker/DateTimePicker/DateTimePicker';
import Button from '../../../components/Button';
import { ADD_TRAVEL } from '../../../utils/mutations';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 16,
    justifyContent: 'space-between',
  },
  form: {
    marginTop: 20,
  },
  actions: {

  },
});

class AddTravel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endAt: null,
      startAt: null,
      locations: ['', ''],
    };
  }

  dateChanged = type => (value) => {
    switch (type) {
      case 'start':
        this.setState({ startAt: value.toString() });
        break;
      case 'end':
        this.setState({ endAt: value.toString() });
        break;
      default:
        break;
    }
  }

  checkInsertTravel = () => {
    const { locations, startAt, endAt } = this.state;
    const { navigation } = this.props;
    return (
      locations
      && locations.length === 2
      && navigation.getParam('start')?.id
      && navigation.getParam('end')?.id
      && startAt !== null
      && endAt !== null
    );
  }

  render() {
    const {
      startAt, endAt,
    } = this.state;
    const { navigation } = this.props;

    return (
      <Mutation mutation={ADD_TRAVEL}>
        {(addTravel, { data }) => (
          <View style={styles.main_container}>
            <View>
              <View style={styles.form}>
                <Input
                  value={navigation.getParam('start', { address: '' }).address}
                  placeholder="Lieu de départ"
                  onFocus={() => {
                    navigation.navigate('SelectLocation', {
                      type: 'start',
                    });
                  }}
                />
                <DateTimePicker label="Date de départ" onSelect={this.dateChanged('start')} />
              </View>
              <View style={styles.form}>
                <Input
                  value={navigation.getParam('end', { address: '' }).address}
                  placeholder="Lieu d'arrivé"
                  onFocus={() => {
                    navigation.navigate('SelectLocation', {
                      type: 'end',
                    });
                  }}
                />
                <DateTimePicker label={"Date d'arrivé"} onSelect={this.dateChanged('end')} />
              </View>
            </View>
            <View style={styles.actions}>
              <Button
                onPress={() => {
                  if (this.checkInsertTravel()) {
                    addTravel({
                      variables: {
                        driver: 'ObjectId("5c6f657dd233c065b77939b3")',
                        locations: [
                          navigation.getParam('start').id,
                          navigation.getParam('end').id,
                        ],
                        members: ['5c6f657dd233c065b77939b3'],
                        startAt: startAt.toString(),
                        endAt: endAt.toString(),
                      },
                    });
                    navigation.navigate('Home');
                  }
                }
                }
                title="Valider"
              />
            </View>
          </View>
        )}
      </Mutation>
    );
  }
}

AddTravel.propTypes = {
  navigation: PropTypes.shape(),
};

AddTravel.defaultProps = {
  navigation: {},
};

export default AddTravel;
