import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import FoodItem from '../components/FoodItem';


const FoodList = ({ route, navigation }) => {
  const { foods } = route.params;
  console.warn(foods);

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={({ item }) => <FoodItem navigation={navigation} item={item} />}
      />
    </View>
  );
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

export default FoodList;
