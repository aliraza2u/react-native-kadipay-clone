import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './customButton.styles';

interface ICustomButtonProps {
  title: string;
  btnStyles?: Object;
  textStyles?: Object;
  onPress?: () => void;
}
const CustomButton: FC<ICustomButtonProps> = ({
  title,
  btnStyles,
  textStyles,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.button, btnStyles]} onPress={onPress}>
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
