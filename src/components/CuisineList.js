import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import CuisineItem from './CuisineItem';


export default class CuisineList extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>MiamMiamR</Text>
        <FlatList
          data={[
            {name: 'Italian', origin: 'European'},
            {name: 'Sushi', origin: 'Japan'}
          ]}
          renderItem={({item}) => <CuisineItem navigation={this.props.navigation} item={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
