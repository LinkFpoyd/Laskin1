import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  function yhteenlasku(){
    setC(parseInt(a)+parseInt(b))
  }

  function vahennys(){
    setC(parseInt(a)-parseInt(b))
  }

  return (
    <View style={styles.container}>
      <Text>Tulos: {c}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setA(input)} value={a}/>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setB(input)} value={b}/>
      <Button style={styles.button} onPress={yhteenlasku} title='+'/>
      <Button style={styles.button} onPress={vahennys} title='-'/>
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
  },
  input: {
    width: 40,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button : {
    flex: 1,
    width: 40,
  }
});
