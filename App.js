import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer,createSwitchNavigator  } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Table from './components/Table';
import SummaryScreen from './screens/SummaryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
    HomeScreen: HomeScreen,
  SummaryScreen:SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
