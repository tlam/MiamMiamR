import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default class CuisineItem extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('FoodList')}>
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

