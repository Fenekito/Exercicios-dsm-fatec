import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [result, setResult] = useState();
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Multiplicador de Números</Text>
      <TextInput
        style={styles.paragraph}
        placeholder="Digite um número"
        keyboardType="numeric"
        onChangeText={setN1}
      />
      <TextInput
        style={styles.paragraph}
        placeholder="Digite outro número"
        keyboardType="numeric"
        onChangeText={setN2}
      />
      <Button
        title="Calcular"
        color="blue"
        onPress={() => setResult(n1 * n2)}
      />
      <Text style={styles.paragraph}>{result}</Text>
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
});
