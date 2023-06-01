/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, Text } from 'react-native-rapi-ui';
import { MainStackParamList } from '../types/navigation';

function About(_: NativeStackScreenProps<MainStackParamList, 'MainTabs'>) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>This is the About tab</Text>
      </View>
    </Layout>
  );
}

export default About;
