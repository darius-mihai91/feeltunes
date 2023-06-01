/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
} from 'react-native';
import { Color, FontFamily } from '../../const/GlobalStyles';

interface ButtonProps extends PressableProps {
  title: string;
  onPress: (evt: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title } = props;

  return (
    <Pressable {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: Color.primary,
  },
  text: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: Color.neutralWhite,
    textAlign: 'center',
  },
});

export default Button;
