import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

export default function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Carregando filmes...</Text>
      </View>
    );
  }

  if (!data.length) {
    return (
      <View style={styles.center}>
        <Text>Nenhum filme encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Ano: {item.releaseYear}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:12},
  center:{flex:1, alignItems:'center', justifyContent:'center'},
  item:{padding:12, backgroundColor:'#fff', borderRadius:6},
  title:{fontSize:16, fontWeight:'600'},
  sep:{height:8}
});
