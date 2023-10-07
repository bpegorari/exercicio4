import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#FF5733', // Cor da borda
    marginVertical: 10,
    fontSize: 18, // Tamanho da fonte reduzido
    padding: 10,
    width: 200, // Largura aumentada
    borderRadius: 8, // Borda mais arredondada
    backgroundColor: '#FFE4C4', // Cor de fundo
    color: '#333', // Cor do texto
    textAlign: 'center', // Centralize o texto
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Alterado para usar flexbox em vez de largura e altura 100%
    backgroundColor: '#7B68EE', // Cor de fundo
  },
  image: {
    height: 100, // Tamanho aumentado
    width: '70%', // Largura ajustada
    marginVertical: 20, // Margem aumentada
    borderRadius: 20,
  },
  title: {
    color: '#FFD700', // Cor do título
    fontWeight: 'bold',
    fontSize: 24, // Tamanho da fonte aumentado
    marginBottom: 10, // Margem inferior aumentada
  },
  botao: {
    height: 45,
    backgroundColor: '#00FF7F', // Cor de fundo
    marginVertical: 10,
    fontSize: 18, // Tamanho da fonte reduzido
    padding: 10,
    width: 200, // Largura aumentada
    borderRadius: 8, // Borda mais arredondada
    color: 'white', // Cor do texto
    textAlign: 'center', // Centralize o texto
  },
});
