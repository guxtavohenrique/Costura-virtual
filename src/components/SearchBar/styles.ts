import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    top: 90,
    alignSelf: 'center',
    width: 360,
    height: 50,
    padding: 10,
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 10,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
    backgroundColor: theme.colors.gray[700],
  }
});