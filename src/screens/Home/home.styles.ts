import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeWrapper: {},
  creditCard: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  shopOnlineWrapper: {
    marginHorizontal: 40,
    borderRadius: 12,
    height: 300,
    padding: 40,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  shopTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  shopDescription: {
    color: '#fff',
    textAlign: 'center',
  },
  shopButtonWrapper: {
    alignItems: 'center',
  },
  shopButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 250,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#4c5ec3',
    fontSize: 18,
    fontWeight: '700',
  },
});
