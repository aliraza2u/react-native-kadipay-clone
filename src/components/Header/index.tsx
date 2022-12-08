import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './header.styles';
import logoWhite from '../../asset/images/logo-white.png';
import CustomInput from '../CustomInput';
import {SearchIcon} from '../../asset/svgs';

const Header = () => {
  return (
    <View style={styles.hearderContainer}>
      <Image source={logoWhite} resizeMode="contain" />
      <View style={styles.searchBar}>
        <View style={styles.customInputWrapper}>
          <CustomInput />
        </View>
        <SearchIcon />
      </View>
    </View>
  );
};

export default Header;
