import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const CuisineItem = ({ handlePress, cuisine }) => {
  return (
    <TouchableOpacity onPress={handlePress}>

      <View>
        <Text style={styles.name}>{cuisine.name}</Text>
        <Text style={styles.item}>{cuisine.origin}</Text>
      </View>
    </TouchableOpacity>
  )
};

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

export default CuisineItem;