import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './creditCard.styles';
import {Bar} from 'react-native-progress';

interface ICardProps {
  title: string;
  content: string;
}

const CreditCard: FC<ICardProps> = ({title, content}) => {
  return (
    <View style={styles.customCard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.barWrapper}>
        <Bar
          progress={0.3}
          width={null}
          color={'#fff'}
          unfilledColor={'#ffffff50'}
          borderColor="transparent"
        />
      </View>
    </View>
  );
};

export default CreditCard;
