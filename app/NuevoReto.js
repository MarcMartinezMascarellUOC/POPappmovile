import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import retosBanner from './assets/retosBanner.jpg';
import HomeScreen from './App.js';
import NuevoRetoScreen from './NuevoReto.js';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
              name="NuevoReto"
              component={NuevoRetoScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default function NuevoReto() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20, fontWeight: 'bold', color: 'dimgrey',}}>Pantalla nuevo reto</Text>
      <Image source={retosBanner} style={{width: 500, height: 300}}/>
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