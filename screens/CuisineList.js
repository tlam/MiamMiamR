import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';

import CuisineItem from '../components/CuisineItem';

const URL = 'https://vinsetmets.herokuapp.com/cuisines/data.json';

const CuisineList = ({ navigation }) => {
  const [cuisines, setCuisines] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchCuisines = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const cuisines = await response.json();
      setCuisines(cuisines);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchCuisines();
    setIsRefreshing(false);
  });

  useEffect(() => {
    handleFetchCuisines();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>MiamMiamR</Text>
      <FlatList
        data={cuisines}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CuisineItem
            handlePress={() => {
              navigation.navigate('FoodList', item);
            }}
            cuisine={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
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

export default CuisineList;