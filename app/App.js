import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import retosBanner from './assets/retosBanner.jpg';
import Boxes from './Boxes/Boxes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, marginBottom: 25, fontWeight: 'bold', color: 'dimgrey',}}>#EresElMejor</Text>
      <Image source={retosBanner} style={{width: 500, height: 300}}/>
      <StatusBar style="auto" />
      <View style={styles.menuContainer}>
        <Text>Menú</Text>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 1</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 2</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 3</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 4</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'bisque',
  },
  menuContainer: {
    width: '50%',
    height: '50%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },

  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
