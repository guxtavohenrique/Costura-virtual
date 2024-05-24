import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row'
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
    fontSize: 20,
    flex: 1,
    textAlign: 'center'
  },
  viewInput: {
    top: 20,
  },
  textInput: {
    overflow: 'scroll',
    borderWidth: 1,
    width: 360,
    height: 200,
    borderRadius: 5,
    padding: 20,
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fontFamily.regular,
    backgroundColor: theme.colors.gray[800]
  },
  imageView: {
    top: 30,
    width: 360,
    height: 410,
    flexDirection: 'row',
    backgroundColor: theme.colors.gray[800],
  },
  image: {
    width: 360,
    height: 410,
  },
  foto: {
    width: 358,
    height: 298,
  },
  groupButton: {
    top: 10,
    paddingLeft: 210,
  },
  buttonAcao: {
    top: 55,
    gap: 5,
    flexDirection: 'row'
  },
  buttonCancelar: {
    width: 180,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.colors.vermelho,
  },
  buttonEnviar: {
    width: 180,
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.colors.blue,
  },
  textCancelarButton: {
    textAlign: 'center',
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
  },
  textEnviarButton: {
    textAlign: 'center',
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
  }
});