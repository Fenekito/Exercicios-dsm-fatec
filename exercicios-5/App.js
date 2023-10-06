import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcularImc() {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
      setResultado('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setResultado('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setResultado('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setResultado('Obesidade grau I');
    } else if (imc >= 35 && imc < 39.9) {
      setResultado('Obesidade grau II');
    } else {
      setResultado('Obesidade mórbida');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.tcdn.com.br/img/img_prod/706165/balanca_digital_de_vidro_techline_tec_silver_21_1_20220816180020.png',
        }}
      />
      <Text style={styles.paragraph}>Peso:</Text>
      <TextInput
        placeholder="Digite o preço do álcool"
        keyboardType="numbers-and-punctuation"
        value={parseFloat(peso)}
        style={styles.input}
        onChangeText={setPeso}
      />
      <Text style={styles.paragraph}>Altura:</Text>
      <TextInput
        placeholder="Digite o preço da gasolina"
        keyboardType="numbers-and-punctuation"
        value={parseFloat(altura)}
        style={styles.input}
        onChangeText={setAltura}
      />
      <Button title="Verificar" onPress={calcularImc} />
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
