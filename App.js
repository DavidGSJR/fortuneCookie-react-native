import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function App() {
  const [sorte, setSorte] = useState('');
  const [isQuebrado, setIsQuebrado] = useState(false);

  const frases = [
    'A vida trará coisas boas se tiveres paciência',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você',
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo',
    'Não há que ser forte. Há que ser flexível',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida'
  ];

  const quebrarBiscoito = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setSorte(frases[randomIndex]);
    setIsQuebrado(true);
  };

  const resetarBiscoito = () => {
    setSorte('');
    setIsQuebrado(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FortuneCookie</Text>

      {!isQuebrado ? (
        <TouchableOpacity onPress={quebrarBiscoito}>
          <Image
            source={require('./assets/biscoitoInteiro.png')}
            style={styles.biscoitoImagem}
          />
        </TouchableOpacity>
      ) : (
        <>
          <Image
            source={require('./assets/biscoitoQuebrado.png')}
            style={styles.biscoitoImagem}
          />
          <Text style={styles.sorteText}>{sorte}</Text>
          <TouchableOpacity onPress={resetarBiscoito} style={styles.resetarButton}>
            <Text style={styles.resetarButtonText}>Quebrar outro biscoito</Text>
          </TouchableOpacity>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  biscoitoImagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  sorteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  resetarButton: {
    backgroundColor: '#f8b400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  resetarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;