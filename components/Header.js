import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
      <TouchableOpacity style={styles.header}>
      <Text style={styles.text}>SCHOOL ATTENDANCE APP</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
})