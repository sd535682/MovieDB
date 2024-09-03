import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/Searchscreen';
import StackNavigator from './StackNavigator';
import Colors from '../styles/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconComponent;
          if (route.name === 'Home') {
            iconComponent = <Entypo name="home" size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconComponent = (
              <AntDesign name="search1" size={size} color={color} />
            );
          }
          return iconComponent;
        },
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.white,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
        },
      })}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}
