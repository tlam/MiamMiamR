import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import FoodItem from './FoodItem';

export default class FoodList extends React.Component {
  _onPress() {

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {name: 'Nigiri'},
            {name: 'Sashimi'}
          ]}
          renderItem={({item}) => <FoodItem navigation={this.props.navigation} item={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    padding: 10,
    fontSize: 13,
    height: 44,
  },
});

