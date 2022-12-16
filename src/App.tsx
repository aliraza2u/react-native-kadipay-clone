/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import Home from './screens/Home/index';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import Profile from './screens/Profile';
import {styles} from './asset/css/app.styles';
import TabNavigator from './components/TabNavigator';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.main}>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
