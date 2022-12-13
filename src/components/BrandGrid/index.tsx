import React, {FC} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {styles} from './brandGrid.styles';

interface IBrandProps {
  image: ImageSourcePropType;
}

const BrandGrid: FC<IBrandProps> = ({image}) => {
  return (
    <TouchableOpacity style={styles.brandGrid}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default BrandGrid;
