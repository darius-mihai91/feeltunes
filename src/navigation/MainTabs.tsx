/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { themeColor, useTheme } from 'react-native-rapi-ui';
import TabBarIcon from '../components/base/TabBarIcon';
import TabBarText from '../components/base/TabBarText';

import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : '#c0c0c0',
          backgroundColor: isDarkmode ? themeColor.dark200 : '#ffffff',
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home as any}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="md-home" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile as any}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="person" />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About as any}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="About" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="ios-information-circle" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
