import React from 'react';
import { themeColor, useTheme } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';

interface TabBarIconProps {
  icon: string;
  focused: boolean;
}

export default (props: TabBarIconProps) => {
  const { focused, icon } = props;
  const { isDarkmode } = useTheme();
  const color = isDarkmode ? themeColor.white100 : themeColor.primary;

  return (
    <Ionicons
      name={icon as any}
      style={{ marginBottom: -7 }}
      size={24}
      color={focused ? color : 'rgb(143, 155, 179)'}
    />
  );
};
