import React, {FC, type PropsWithChildren} from 'react';
import {Button, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CreditCard from '../../components/CreditCard';
import Header from '../../components/Header';
import {styles} from './home.styles';

const Home: FC<
  PropsWithChildren<{navigation: {navigate: (route: string) => void}}>
> = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.homeWrapper}>
        <Header />
      </View>
      <View style={styles.creditCard}>
        <CreditCard title={'Credit Limit'} content={'0.00 SAR'} />
      </View>
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
    </ScrollView>
  );
};

export default Home;
