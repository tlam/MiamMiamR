import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

export default class CuisineItem extends React.Component {
  _onPress() {
    this.props.navigation.navigate('FoodList', {
	});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onPress}>
        <View>
          <Text style={styles.name}>{this.props.item.name}</Text>
          <Text style={styles.item}>{this.props.item.origin}</Text>
        </View>
      </TouchableWithoutFeedback>
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

