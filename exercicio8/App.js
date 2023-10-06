import { Text, SafeAreaView, StyleSheet, Image , ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react'

import {Picker} from '@react-native-picker/picker';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [nome, setNome] = useState("");
  
  const [sexo, setSexo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.paragraph}>Anúncios</Text>
      <ScrollView horizontal={true}>
        <View style={styles.box1}>
          <Image
          style={styles.image}
          source={{
            uri: "https://d2r9epyceweg5n.cloudfront.net/stores/001/647/595/products/2021-3067c904e47d48defc16195519438505-1024-1024.png"
          }}
          />
          <Text style={styles.content}>Tênis na Moda: R$120</Text>
        </View>
        <View style={styles.box2}>
          <Image
          style={styles.image}
          source={{
            uri: "https://images.samsung.com/is/image/samsung/p6pim/br/un65au7700gxzd/gallery/br-uhd-au7000-un65au7700gxzd-537668704?$650_519_PNG$"
          }}
          />
          <Text style={styles.content}>Televisão samsung 4k: R$4200</Text>
        </View>
        <View style={styles.box3}>
          <Image
          style={styles.image}
          source={{
            uri: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP758/imac21inch2017_2x.png"
          }}
          />
          <Text style={styles.content}>iMac: R$8000</Text>
        </View>
        <View style={styles.box4}>
          <Image
          style={styles.image}
          source={{
            uri: "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18758-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YUdSaEwyZzFPUzg1TnpNeU1UWTNPRFl3TWpVMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU9GOTZaWEp2TG5CdVp3fDY4YzUyNmY1ZWNiNjEzM2FjYTcxZWI5OWQwOTFhZGI4NTMzYTdhM2RmY2VjNDk5M2IzMTQ0OTBkYmQ4YWYyZDc"
          }}
          />
          <Text style={styles.content}>iPhone 15 Azul: R$6200</Text>
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
  },
  content: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  box1:{
    backgroundColor: 'red',
    height: 500,
    width: 500,
  },
  box2:{
    backgroundColor: 'green',
    height: 500,
    width: 500,
  },
  box3:{
    backgroundColor: 'blue',
    height: 500,
    width: 500,
  },
  box4:{
    backgroundColor: 'yellow',
    height: 500,
    width: 500,
  },
  image: {
    width: 250,
    height: 250,
    margin: 16,
    padding: 8,
    alignContent: 'center',
  },
});
