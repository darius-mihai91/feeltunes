import React from 'react';
import { Text, themeColor, useTheme } from 'react-native-rapi-ui';

interface TabBarTextProps {
  title: string;
  focused: boolean;
}

export default (props: TabBarTextProps) => {
  const { focused, title } = props;
  const { isDarkmode } = useTheme();
  const color = isDarkmode ? themeColor.white100 : themeColor.primary;

  return (
    <Text
      fontWeight="bold"
      style={{
        marginBottom: 5,
        color: focused ? color : 'rgb(143, 155, 179)',
        fontSize: 10,
      }}
    >
      {title}
    </Text>
  );
};
