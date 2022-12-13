import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  brandGrid: {
    width: '47%',
    height: 150,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'lightgray',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '75%',
    resizeMode: 'contain',
  },
});
