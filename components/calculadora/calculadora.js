import React, { useState } from 'react';
import { Text, Pressable, View, TextInput, Image, Alert } from 'react-native';
import { styles } from './styles';

export function Calculador() {
  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  const [result, setResult] = useState('');

  function verificar() {
    if (inp1 === '' || inp2 === '') {
      setResult('');
      Alert.alert('Preencha os dois valores');
    } else {
      inp1 / inp2 > 0.7 ? setResult('Melhor Gasolina') : setResult('Melhor Álcool');
    }
  }

  function peganum1(num) {
    setInp1(num);
  }

  function peganum2(num) {
    setInp2(num);
  }

  return (
    <View style={styles.container1}>
      <Text style={styles.title}>Gasolina ou Álcool</Text>

      <Image source={require('./images/bomba-conbustivel.jpg')} style={styles.image} />

      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='R$: Álcool'
        onChangeText={peganum1}
        placeholderTextColor='#888'
      />

      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='R$: Gasolina'
        onChangeText={peganum2}
        placeholderTextColor='#888'
      />

      <Pressable style={styles.botao} onPress={verificar}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Verificar</Text>
      </Pressable>

      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{result}</Text>
    </View>
  );
}
