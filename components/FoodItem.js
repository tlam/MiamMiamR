import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'

const FoodItem = ({ handlePress, food }) => {

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: food.source
          }}
        />
        <Text style={styles.name}>{food.name}</Text>
        <Text>{food.description}</Text>
      </View>
    </TouchableOpacity>
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
  image: {
    width: 50,
    height: 50
  }
});

export default FoodItem;
