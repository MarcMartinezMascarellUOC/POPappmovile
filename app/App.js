import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import retosBanner from './assets/retosBanner.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20, fontWeight: 'bold', color: 'dimgrey',}}>#EresElMejor</Text>
      <Image source={retosBanner} style={{width: 500, height: 300}}/>
      <StatusBar style="auto" />
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => alert('Hello World!')}
          style={[styles.button, {}]}>
            <Text style={styles.buttonText}>EVOLUCIÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Hello World!')}
          style={styles.button}>
            <Text style={styles.buttonText}>NUEVO RETO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Hello World!')}
          style={styles.button}>
            <Text style={styles.buttonText}>PERFIL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Hello World!')}
          style={styles.button}>
            <Text style={styles.buttonText}>CONTACTAR</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'cadetblue',
    width: '40%',
    height: 150,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dimgrey',
  },

});
