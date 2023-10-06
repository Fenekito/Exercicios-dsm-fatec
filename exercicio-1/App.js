import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Meu Perfil
      </Text>
      <Image style={styles.image} source={{
        uri:'https://i.kym-cdn.com/entries/icons/original/000/042/928/cover6.jpg'
      }}/>
      <Text style={styles.paragraph}></Text>

      <Text>
      Nome: Juan Claudio Caires Pereira
      </Text>
      <Text>
      Formação: Análise e Desenvolvimento de Sistemas (Fatec 2024)
      </Text>
      <Text>
      Experiência: Estágiario (SEPLAN-PG) 2023-2023
      </Text>
      <Text>
      Projetos: Slide! (Godot) / Back-end Matchjobs (Javascript) 
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  }
});
