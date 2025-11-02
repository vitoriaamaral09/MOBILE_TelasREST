import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Button title="Listar filmes" onPress={() => navigation.navigate('Movies')} />
      <View style={{height:12}} />
      <Button title="Voltar para home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:16 },
  title: { fontSize:18, marginBottom:12 }
});
