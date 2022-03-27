import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



 export class menuComponente extends React.Component{
     render(){
         return(

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
            </View>

         );
     }
 }

const styles = StyleSheet.create({
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