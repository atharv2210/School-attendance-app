import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Table extends React.Component{
  render(){
    return (
      <View style={styles.grid}>
      <Text style={styles.text}>S.NO.  </Text>
      <Text style={styles.text}>  NAME            </Text>
      <Text style={styles.text1}>       STATUS       </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "red",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  },
  text1: {
    backgroundColor: "red",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  grid: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
})