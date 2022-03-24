import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import retosBanner from './assets/retosBanner.jpg';

export default function App() {
  return (
    
    <View style={styles.container}>
      
        <Text style={{fontSize: 25, marginBottom: 25, fontWeight: 'bold', color: 'dimgrey'}}>#EresElMejor</Text>
        <Image source={retosBanner} style={{width: 500, height: 300}}/>
        <StatusBar style="auto" />

        <View style={styles.center}>
        </View>


      <View style={styles.menuContainer}>
        
        <TouchableOpacity style={styles.bottomItem} onPress={() => {alert("EVOLUCIÓN")}}>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>EVOLUCIÓN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => {alert("NUEVO RETO")}}>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>NUEVO RETO</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => {alert("PERFIL")}}>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>PERFIL</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => {alert("CONTACTAR")}}>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>CONTACTAR</Text>
          </View>
        </TouchableOpacity>

        {/* <View style={styles.bottomItem}>
        <TouchableOpacity>
          <View style={styles.bottomItemInner}>
              <Text>Press here</Text>
          </View>
        </TouchableOpacity>
        </View>
       

        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            
                <Text>Press here</Text>
            
          </View>
        </View>

        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            <TouchableOpacity>
              <Text>Press here</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
            <TouchableOpacity>
              <Text>Press here</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: 'bisque',
    height: '45%',
  },
  center: {
    height: '5%',
    backgroundColor: '#7fbcac',
    zIndex: 1
  },
  menuContainer: {
    height: '46.5%',
    backgroundColor: '#5C5C5C',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: 'cadetblue',
    borderRadius: 30
  },
  textoBoxes:{
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
  

});
