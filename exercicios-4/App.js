import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcularCombustivel() {
    const resultadoCalculo = precoAlcool / precoGasolina;

    if (resultadoCalculo < 0.7) {
      setResultado('Álcool é a melhor opção.');
    } else {
      setResultado('Gasolina é a melhor opção.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.huttie.com/wp-content/uploads/2021/12/JC5MR.png',
        }}
      />
      <Text style={styles.paragraph}>Preço do Álcool:</Text>
      <TextInput
        placeholder="Digite o preço do álcool"
        keyboardType="numbers-and-punctuation"
        value={parseFloat(precoAlcool)}
        style={styles.input}
        onChangeText={setPrecoAlcool}
      />
      <Text style={styles.paragraph}>Preço da Gasolina:</Text>
      <TextInput
        placeholder="Digite o preço da gasolina"
        keyboardType="numbers-and-punctuation"
        value={parseFloat(precoGasolina)}
        style={styles.input}
        onChangeText={setPrecoGasolina}
      />
      <Button title="Verificar" onPress={calcularCombustivel} />
      <Text style={styles.resultado}>{resultado}</Text>
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
  resultado: {
    fontSize: 50,
    textAlign: 'center',
    color: 'green',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
});
