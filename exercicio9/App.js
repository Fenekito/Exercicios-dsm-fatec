import { Text, SafeAreaView, StyleSheet, TextInput, ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react'

import {Picker} from '@react-native-picker/picker';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [nome, setNome] = useState("");
  
  const [sexo, setSexo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.content}>Vagas</Text>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.paragraph}>Desenvolvedor Back-End</Text>
          <Text style={styles.content}>Salario: R$2000</Text>
          <Text style={styles.content}>Descrição: Venha trabalhar no Back-End dá Google Firestore!</Text>
          <Text style={styles.content}>Contato: google@gmail.com</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.paragraph}>Desenvolvedor Front-End</Text>
          <Text style={styles.content}>Salario: R$3000</Text>
          <Text style={styles.content}>Descrição: Venha trabalhar no Front-End do Youtube!</Text>
          <Text style={styles.content}>Contato: youtubeTeam@gmail.com</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.paragraph}>Cientista de Dados</Text>
          <Text style={styles.content}>Salario: R$8000</Text>
          <Text style={styles.content}>Descrição: A Meta é a melhor empresa para trabalhar como cientista de Dados!</Text>
          <Text style={styles.content}>Contato: MetaTeam@meta.com</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.paragraph}>Engenheiro de Software</Text>
          <Text style={styles.content}>Salario: R$8000</Text>
          <Text style={styles.content}>Descrição: A Microsoft sempre precisa de mais engenheiros para trabalhar no Windows!</Text>
          <Text style={styles.content}>Contato: MicrosoftWindows@microsoft.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
    flex: 1
  },
  paragraph: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  content: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  box:{
    backgroundColor: '#ecf0f1',
    height: 250,
  },
});
