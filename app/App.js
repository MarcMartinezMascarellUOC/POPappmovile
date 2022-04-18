import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import retosBanner from './assets/retosBanner.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from 'react-dom';

function EvolucionScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Evolución</Text>
      <Button title="Evolucion" onPress={() => navigation.navigate('Evolucion')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Evolucion" component={EvolucionScreen} />
    </Stack.Navigator>
  </NavigationContainer>

// const { navigation } = this.props.navigation;

  return (  
    
    <View style={styles.container}>

      <Text style={{ fontSize: 25, marginBottom: 25, fontWeight: 'bold', color: 'dimgrey' }}>#EresElMejor</Text>
      <Image source={retosBanner} style={{ width: 500, height: 300 }} />
      <StatusBar style="auto" />

      <View style={styles.center}>
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate("Evolucion")}>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>EVOLUCIÓN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => { alert("NUEVO RETO"); } }>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>NUEVO RETO</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => { alert("PERFIL"); } }>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>PERFIL</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => { alert("CONTACTAR"); } }>
          <View style={styles.bottomItemInner}>
            <Text style={styles.textoBoxes}>CONTACTAR</Text>
          </View>
        </TouchableOpacity>

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

