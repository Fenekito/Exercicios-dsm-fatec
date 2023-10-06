import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  Button,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState(1);
  const [escolaridade, setEscolaridade] = useState(1);
  const [limite, setLimite] = useState(100);
  const [brasileiro, setBrasileiro] = useState(true);

  const [nomeV, setNomeV] = useState('');
  const [idadeV, setIdadeV] = useState('');
  const [sexoV, setSexoV] = useState('');
  const [escolaridadeV, setEscolaridadeV] = useState('');
  const [limiteV, setLimiteV] = useState('');
  const [brasileiroV, setBrasileiroV] = useState('');

  function confirmarDados() {
    setNomeV(nome);
    setIdadeV(idade);
    setSexoV(sexo == 1 ? 'Masculino' : 'Feminino');
    setLimiteV(limite.toFixed(0));
    setBrasileiroV(brasileiro === true ? 'Brasileiro' : 'Não Brasileiro');
      if(escolaridade == 1)
        setEscolaridadeV('Ensino Fundamental Incompleto');
      else if (escolaridade == 2)
        setEscolaridadeV('Ensino Fundamental Completo');
      else if (escolaridade == 3)
        setEscolaridadeV('Ensino Médio Incompleto');
      else if (escolaridade == 4)
        setEscolaridadeV('Ensino Médio Completo');
      else if (escolaridade == 5)
        setEscolaridadeV('Ensino Superior Incompleto');
      else
        setEscolaridadeV('Ensino Superior Completo');
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Abertura de Conta</Text>
      <Text style={styles.paragraph}>
        Nome:
        <TextInput value={nome} onChangeText={setNome} />
      </Text>
      <Text style={styles.paragraph}>
        Idade:
        <TextInput
          onChangeText={(text) => setIdade(Number(text))}
          keyboardType="numeric"
        />
      </Text>
      <Text style={styles.paragraph}>
        Sexo:
        <Picker
          selectedValue={sexo}
          onValueChange={(value, index) => setSexo(value)}>
          <Picker.Item label="Masculino" key={1} value={1} />
          <Picker.Item label="Feminino" key={2} value={2} />
        </Picker>
      </Text>
      <Text style={styles.paragraph}>
        Escolaridade:
        <Picker
          selectedValue={escolaridade}
          onValueChange={(value, index) => setEscolaridade(value)}>
          <Picker.Item
            label="Ensino Fundamental Incompleto"
            key={1}
            value={1}
          />
          <Picker.Item label="Ensino Fundamental completo" key={2} value={2} />
          <Picker.Item label="Ensino Médio Incompleto" key={3} value={3} />
          <Picker.Item label="Ensino Médio Completo" key={4} value={4} />
          <Picker.Item label="Ensino Superior Incompleto" key={5} value={5} />
          <Picker.Item label="Ensino Superior Completo" key={6} value={6} />
        </Picker>
      </Text>
      <Text style={styles.paragraph}>Limite:{limite.toFixed(0)}</Text>
      <Slider
        style={styles.paragraph}
        minimumValue={100}
        maximumValue={500}
        onValueChange={(valor) => setLimite(valor)}
        value={limite}
      />
      <Switch
        style={styles.paragraph}
        value={brasileiro}
        onValueChange={(valor) => setBrasileiro(valor)}
      />
      <Button
        style={styles.paragraph}
        title="Confirmar"
        onPress={confirmarDados}
      />
      <Text style={styles.paragraph}>Dados Informados</Text>
      <Text style={styles.paragraph}>Nome: {nomeV}</Text>
      <Text style={styles.paragraph}>Idade: {idadeV}</Text>
      <Text style={styles.paragraph}>Sexo: {sexoV}</Text>
      <Text style={styles.paragraph}>Escolaridade: {escolaridadeV}</Text>
      <Text style={styles.paragraph}>Limite: {limiteV}</Text>
      <Text style={styles.paragraph}>Brasileiro: {brasileiroV}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
