import React, {FC, ReactNode} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './customButton.styles';

interface ICustomButtonProps {
  btnStyles?: Object;
  textStyles?: Object;
  onPress?: () => void;
  children?: ReactNode;
}
const CustomButton: FC<ICustomButtonProps> = ({
  btnStyles,
  textStyles,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity style={[styles.button, btnStyles]} onPress={onPress}>
      <Text style={[styles.text, textStyles]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
