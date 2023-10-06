import { Text, SafeAreaView, Button } from 'react-native';
import {useState, useEffect} from 'react';
import styles from './styles';

export default function App() {
  const [counter, setCounter] = useState(0)

  function Count(increment) {
    if (increment)
      setCounter(counter+1);
    else
      setCounter(counter-1 > 0 ? counter-1 : 0);
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Contador de Pessoas</Text>
      <Text style={styles.paragraph}>{counter}</Text>
      <Button title='+' color='green' onPress={() => Count(true)}/>
      <Button title='-' color='red' onPress={() =>Count(false)}/>
    </SafeAreaView>
  )
}
