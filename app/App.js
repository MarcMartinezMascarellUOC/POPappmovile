import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import retosBanner from './assets/retosBanner.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20, fontWeight: 'bold', color: 'dimgrey',}}>#EresElMejor</Text>
      <Image source={retosBanner} style={{width: 500, height: 300}}/>
      <StatusBar style="auto" />
      <View style={styles.menuContainer}>
        <Text>Menú</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'bisque',
  },
  menuContainer: {

  }

});
