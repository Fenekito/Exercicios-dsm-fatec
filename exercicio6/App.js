import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const num = Math.floor(Math.random() * 11);
  const [n, setN] = useState(0);
  const [acerto, setAcerto] = useState(false);
  function validar() {
    if(n == num) {
      setAcerto(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Jogo do N° Aleatório</Text>
      <Image
      style={styles.image}
      source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png"
      }}
      />
      <Text> </Text>
      <Text style={styles.paragraph}>Tente descobrir o número entre 0 a 10</Text>
      <TextInput style={styles.paragraph}
      placeholder="Digite um Número"
      keyboardType='numeric'
      onChangeText={(valor) => setN(Number(valor))}
      />
      <Button
      title="Descobrir"
      onPress={validar}
      />
      <Text>{acerto === true ? "Acertou!" : "Tente Denovo"}</Text>
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
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
  }
});
