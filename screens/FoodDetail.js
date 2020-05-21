import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

export default class FoodDetail extends React.Component {

  render() {
    const { item } = this.props.route.params;
    return (
      <View>
        <Text style={styles.name}>{item.name}</Text>
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

