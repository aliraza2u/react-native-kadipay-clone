import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './customInput.styles';

const CustomInput = () => {
  return (
    <TextInput
      style={styles.customInput}
      placeholder={'Search product or store'}
    />
  );
};

export default CustomInput;
