import React, {FC, type PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './home.styles';

const Home: FC<
  PropsWithChildren<{navigation: {navigate: (route: string) => void}}>
> = ({navigation}) => {
  return (
    <View style={styles.homeWrapper}>
      <Text>Home Screen</Text>
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;
