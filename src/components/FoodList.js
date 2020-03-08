import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

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
          renderItem={({item}) => <Text>{item.name}</Text>}
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

