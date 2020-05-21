import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CuisineList from './screens/CuisineList';
import FoodDetail from './screens/FoodDetail';
import FoodList from './screens/FoodList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CuisineList"
          component={CuisineList}
        />
        <Stack.Screen
          name="FoodList"
          component={FoodList}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

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

export default App;