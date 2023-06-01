/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, TextInputProps } from '@react-native-material/core';
import { Color, FontFamily } from '../../const/GlobalStyles';

interface FormInputProps extends TextInputProps {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...rest }) => (
  <View style={styles.formInputContainer}>
    <TextInput
      style={styles.formTextInputStyle}
      inputContainerStyle={styles.formInputContainerStyle}
      inputStyle={styles.formInputStyle}
      label={label}
      color={Color.darkslategray}
      underlineColorAndroid="transparent"
      {...rest}
    />
  </View>
);

const styles = StyleSheet.create({
  formInputContainer: {
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.05)',
    borderRadius: 50,
    backgroundColor: Color.neutralWhite,
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px',
  },
  formInputContainerStyle: {
    backgroundColor: 'none',
    border: 'none',
  },
  formTextInputStyle: {
    fontFamily: FontFamily.mulishRegular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 14,
    border: 'none',
  } as any,
  formInputStyle: {
    outlineStyle: 'none',
  } as any,
});

export default FormInput;
