import React, {FC, type PropsWithChildren} from 'react';
import {Button, ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CreditCard from '../../components/CreditCard';
import Header from '../../components/Header';
import {styles} from './home.styles';
import shopOnlineImage from '../../asset/images/shop-online-bg.png';
import CustomButton from '../../components/CustomButton';

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
      <ImageBackground
        source={shopOnlineImage}
        resizeMode={'cover'}
        style={styles.shopOnlineWrapper}>
        <View>
          <Text style={styles.shopTitle}>Shop Online</Text>
          <Text style={styles.shopDescription}>
            Find you favorite brands and start shopping with KadiPay
          </Text>
        </View>
        <View style={styles.shopButtonWrapper}>
          <CustomButton
            title={'Explore Our Partners'}
            btnStyles={styles.shopButton}
            textStyles={styles.buttonText}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </ImageBackground>
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
    </ScrollView>
  );
};

export default Home;
