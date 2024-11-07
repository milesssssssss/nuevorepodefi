import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [section, setSection] = useState('');
  const [observation, setObservation] = useState('');
  const [status, setStatus] = useState('Pendiente');

  const handleSave = () => {
    navigation.navigate('observaciones', {
      name,
      grade,
      section,
      observation,
      status,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Nombre del Estudiante:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Grado:</Text>
      <TextInput style={styles.input} value={grade} onChangeText={setGrade} />

      <Text>Sección:</Text>
      <TextInput style={styles.input} value={section} onChangeText={setSection} />

      <Text>Observación:</Text>
      <TextInput style={styles.input} value={observation} onChangeText={setObservation} />

      <Text>Estado de la Observación:</Text>
      <Picker selectedValue={status} onValueChange={setStatus} style={styles.picker}>
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Finalizada" value="Finalizada" />
      </Picker>

      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderColor: '#ccc', borderWidth: 1, marginBottom: 8, padding: 8, borderRadius: 4 },
  picker: { borderColor: '#ccc', borderWidth: 1, marginBottom: 16, borderRadius: 4 },
});
