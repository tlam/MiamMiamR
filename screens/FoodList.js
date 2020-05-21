import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native'

import FoodItem from '../components/FoodItem';


const FoodList = ({ route, navigation }) => {
  const { foods } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FoodItem
            handlePress={() => {
              navigation.navigate('FoodDetail', item);
            }}
            food={item}
          />
        )}
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
