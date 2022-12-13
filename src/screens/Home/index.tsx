import React, {FC, type PropsWithChildren} from 'react';
import {Button, ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CreditCard from '../../components/CreditCard';
import Header from '../../components/Header';
import {styles} from './home.styles';
import CustomButton from '../../components/CustomButton';
import CategoryItem from '../../components/CategoryItem';
import {AssetImages, brandImagesList} from '../../asset';
import BrandGrid from '../../components/BrandGrid';

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
        source={AssetImages.shopOnlineImage}
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
            btnStyles={styles.shopButton}
            textStyles={styles.buttonText}
            onPress={() => navigation.navigate('Profile')}>
            Explore Our Partners
          </CustomButton>
        </View>
      </ImageBackground>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            title={category.name}
            color={category.color}
            image={category.image}
          />
        ))}
      </ScrollView>
      <View style={styles.brandImagesWrapper}>
        {brandImagesList.map(item => (
          <BrandGrid key={item} image={item} />
        ))}
      </View>
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
    </ScrollView>
  );
};

export default Home;

export const categoriesColors = {
  jaggedIce: '#B9E7DF',
  rajah: '#F6C575',
  indigo: '#4E61BD',
  terraCota: '#DE715A',
  moonRaker: '#CDC0EE',
};
export const categories = [
  {
    id: 1,
    name: 'Clothes',
    image: AssetImages.clothesImage,
    color: categoriesColors.jaggedIce,
  },
  {
    id: 2,
    name: 'Shoes',
    image: AssetImages.shoesImage,
    color: categoriesColors.rajah,
  },
  {
    id: 3,
    name: 'Bags',
    image: AssetImages.bagsImage,
    color: categoriesColors.indigo,
  },
  {
    id: 4,
    name: 'Hats',
    image: AssetImages.hatsImage,
    color: categoriesColors.terraCota,
  },
  {
    id: 5,
    name: 'Pants',
    image: AssetImages.pantsImage,
    color: categoriesColors.moonRaker,
  },
  {
    id: 6,
    name: 'Belts',
    image: AssetImages.hatsImage,
    color: categoriesColors.indigo,
  },
];
