import React, {FC} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-svg';
import {styles} from './categoryItem.styles';

interface ICategoryProps {
  title: string;
  color: string;
  image: ImageSourcePropType;
}

const CategoryItem: FC<ICategoryProps> = ({image, title, color}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.categoryItem, {backgroundColor: color}]}>
        <Image source={image} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
