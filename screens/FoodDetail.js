import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

const FoodDetail = ({ route, navigation }) => {
  const { name, description, source } = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: source
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
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
  image: {
    width: 200,
    height: 120
  }
});

export default FoodDetail;