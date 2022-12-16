import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0.025,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          marginBottom: 20,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        // options={{
        //   tabBarLabel: 'Profile',
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons name="profile" color={color} size={size} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
