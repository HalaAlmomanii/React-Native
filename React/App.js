import React , { Fragment }from 'react';
import { StyleSheet,View,TextInput,Button ,FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator }from 'react-navigation-stack';
import Page1 from'./comp/Page1'
import Page2 from'./comp/Page2'
import Page3 from'./comp/Page3'

const Navigator = createStackNavigator({
  Page1:Page1,
  Page2: Page2,
  Page3: Page3,
});   
const App = createAppContainer(Navigator);

export default App   